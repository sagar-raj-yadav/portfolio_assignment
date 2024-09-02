import Gmail from "./Gmail";
import PropTypes from "prop-types";
import styles from "./FormSection.module.css";
import axios from 'axios';
import React, { useState } from 'react';

const FrameComponent1 = ({ className = "" }) => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      await axios.post('http://localhost:3001/contacts', formData);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  return (
    <section className={[styles.formContainerWrapper, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formHeading}>
          <h1 className={styles.leaveMeYour}>Leave ME your info</h1>
          <h1 className={styles.contactInformation}>Contact information</h1>
        </div>
        <div className={styles.formAndLocation}>
        
          <form  className={styles.infoDetails} onSubmit={handleSubmit}>
            <div className={styles.inputFields1}>
              <div className={styles.subject}>YourFullName(Required)</div>
              <input
               className={styles.inputFieldsItem} 
               type="text" 
               name="fullName"
                value={formData.fullName}
                onChange={handleChange}
               />
                 {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
            </div>
            <div className={styles.inputFields1}>
              <div className={styles.subject}>YourEmail(Required) </div>
              <input
               className={styles.inputFieldsItem}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                 />
                 {errors.email && <div className={styles.error}>{errors.email}</div>}
            </div>
            <div className={styles.inputFields1}>
              <div className={styles.subject}>Subject</div>
              <input 
              className={styles.inputFieldsItem}
               type="text"
               name="subject"
                value={formData.subject}
                onChange={handleChange}
                />
            </div>
            <div className={styles.inputFields2}>
              <div className={styles.yourMessage}>YourMessage</div>
              <textarea 
              className={styles.inputFieldsInner} 
              name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button  type="submit" className={styles.sendMessage}>
              <div className={styles.sendMessage1}>Send message</div>
            </button>
          </form>
          <div className={styles.locationDetails}>
            <div className={styles.location}>
              <div className={styles.locationChild} />
              <div className={styles.addressContainer}>
                <div className={styles.addressBlock}>
                  <div className={styles.addressLabels}>
                    <div className={styles.india}>India</div>
                    <div className={styles.delhi}>Delhi</div>
                    <div className={styles.thStreet}>35th Street</div>
                  </div>
                </div>
                <div className={styles.addressLabel}>
                  <div className={styles.country}>Country:</div>
                  <div className={styles.city}>City:</div>
                  <div className={styles.streat}>Streat:</div>
                </div>
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactIcons} />
                <img
                  className={styles.conslocationIcon}
                  alt=""
                  src="/conslocation.svg"
                />
              </div>
              <div className={styles.location1}>
                <div className={styles.locationItem} />
                <div className={styles.secondLocation}>
                  <div className={styles.countryParent}>
                    <div className={styles.country1}>Country:</div>
                    <div className={styles.city1}>City:</div>
                    <div className={styles.streat1}>Streat:</div>
                  </div>
                </div>
                <div className={styles.mapDetails}>
                  <div className={styles.contactIcons1}>
                    <div className={styles.iconBackground} />
                    <img
                      className={styles.conslocationIcon1}
                      alt=""
                      src="/conslocation-1.svg"
                    />
                  </div>
                  <div className={styles.bangladeshAddress}>
                    <div className={styles.detailedAddress}>
                      <div className={styles.bangladesh}>Bangladesh</div>
                      <div className={styles.dhaka}>Dhaka</div>
                      <div className={styles.vhataraBadda}>
                        35 vhatara, Badda
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactDetails1}>
              <div className={styles.communication}>
                <Gmail
                  consmail="/consmail-1.svg"
                  propWidth="unset"
                  propMargin="unset"
                  propPosition="unset"
                  propTop="unset"
                  propRight="unset"
                  propHeight="unset"
                  propFlex="1"
                />
              </div>
              <div className={styles.mobile}>
                <div className={styles.mobileChild} />
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameChild} />
                        <img
                          className={styles.iconsmobile}
                          loading="lazy"
                          alt=""
                          src="/iconsmobile.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.supportServices}>
                      Support services:
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>15369</div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.officeParent}>
                    <div className={styles.office}>Office:</div>
                    <div className={styles.personal}>Personal:</div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>+58 (021)356 587 235</div>
                    <div className={styles.div2}>+58 (021)356 587 235</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
