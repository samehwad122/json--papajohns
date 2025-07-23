import React, { useState } from 'react';
import './Service.css';
import { useLanguage } from '../context/LangContext';

const Service = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    complaintType: '',
    orderType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const labels = {
    title: isArabic ? 'يمكنك التواصل معنا من خلال النموذج التالي:' : 'You can contact us through the form below:',
    name: isArabic ? 'الإسم' : 'Name',
    email: isArabic ? 'البريد الإلكترونى' : 'Email',
    phone: isArabic ? 'رقم الهاتف' : 'Phone Number',
    address: isArabic ? 'العنوان' : 'Address',
    complaintType: isArabic ? 'نوع الشكوى' : 'Complaint Type',
    orderType: isArabic ? 'نوع الطلب' : 'Order Type',
    message: isArabic ? 'الرسالة' : 'Message',
    send: isArabic ? 'إرسال' : 'Send',
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = isArabic ? 'الإسم مطلوب' : 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = isArabic ? 'البريد غير صالح' : 'Invalid email';
    if (!formData.phone || formData.phone.length < 8) newErrors.phone = isArabic ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
    if (!formData.address) newErrors.address = isArabic ? 'العنوان مطلوب' : 'Address is required';
    if (!formData.complaintType) newErrors.complaintType = isArabic ? 'برجاء اختيار نوع الشكوى' : 'Please select a complaint type';
    if (!formData.orderType) newErrors.orderType = isArabic ? 'برجاء اختيار نوع الطلب' : 'Please select an order type';
    if (!formData.message) newErrors.message = isArabic ? 'الرسالة مطلوبة' : 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        complaintType: '',
        orderType: '',
        message: '',
      });
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className={`service-form-container ${isArabic ? 'rtl' : ''}`}>
      <h2>{labels.title}</h2>
      <form onSubmit={handleSubmit} className="service-form">
        <input
          type="text"
          name="name"
          placeholder={labels.name}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder={labels.email}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="phone"
          placeholder={labels.phone}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input
          type="text"
          name="address"
          placeholder={labels.address}
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="error">{errors.address}</span>}

        <select name="complaintType" value={formData.complaintType} onChange={handleChange}>
          <option value="">{labels.complaintType}</option>
          <option value="delivery">{isArabic ? 'مشكلة توصيل' : 'Delivery Issue'}</option>
          <option value="quality">{isArabic ? 'مشكلة جودة' : 'Quality Issue'}</option>
          <option value="other">{isArabic ? 'أخرى' : 'Other'}</option>
        </select>
        {errors.complaintType && <span className="error">{errors.complaintType}</span>}

        <select name="orderType" value={formData.orderType} onChange={handleChange}>
          <option value="">{labels.orderType}</option>
          <option value="online">{isArabic ? 'طلب أونلاين' : 'Online Order'}</option>
          <option value="phone">{isArabic ? 'طلب هاتفي' : 'Phone Order'}</option>
          <option value="inStore">{isArabic ? 'طلب من الفرع' : 'In-store Order'}</option>
        </select>
        {errors.orderType && <span className="error">{errors.orderType}</span>}

        <textarea
          name="message"
          placeholder={labels.message}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">{labels.send}</button>
        {submitted && <p className="success">{isArabic ? 'تم الإرسال بنجاح!' : 'Form submitted successfully!'}</p>}
      </form>
    </div>
  );
};

export default Service;
