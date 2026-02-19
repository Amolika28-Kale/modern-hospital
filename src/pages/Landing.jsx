// Landing.jsx - Enhanced with animations and mobile responsiveness
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Phone, Calendar, Star, User, MapPin, Mail, Clock,
  ChevronRight, Award, Heart, Activity, Scissors, 
  X, Menu, Bone, Shield, Stethoscope, Ambulance,
  TrendingUp, Users, CheckCircle, AlertCircle,
  Microscope, ArrowRight, Play, Quote, Gift,
  Sparkles, Zap, ShieldCheck, Thermometer,
  Pill, Syringe, Droplets, BadgeCheck
} from 'lucide-react';

const Landing = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: ''
  });

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      icon: <Bone className="w-8 h-8 text-blue-600" />, 
      title: "Joint Replacement Surgery", 
      desc: "Advanced knee and hip replacement with precision implants for lasting mobility.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Activity className="w-8 h-8 text-blue-600" />, 
      title: "Fracture & Trauma Care", 
      desc: "Immediate and expert management of all types of fractures and trauma injuries.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Heart className="w-8 h-8 text-blue-600" />, 
      title: "Spine Treatment", 
      desc: "Comprehensive care for disc problems, spondylitis, and spinal deformities.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Scissors className="w-8 h-8 text-blue-600" />, 
      title: "Arthroscopy", 
      desc: "Minimally invasive joint surgery with faster recovery and less pain.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Zap className="w-8 h-8 text-blue-600" />, 
      title: "Sports Injury Treatment", 
      desc: "Specialized care for ligament tears, tendon injuries, and sports-related trauma.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Activity className="w-8 h-8 text-blue-600" />, 
      title: "Physiotherapy & Rehab", 
      desc: "Structured rehabilitation programs to restore mobility and strength.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Users className="w-8 h-8 text-blue-600" />, 
      title: "Pediatric Orthopedics", 
      desc: "Gentle, specialized orthopedic care for children with bone and joint conditions.",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: <Pill className="w-8 h-8 text-blue-600" />, 
      title: "Osteoporosis Management", 
      desc: "Prevention, diagnosis, and treatment of bone density disorders.",
      gradient: "from-blue-500 to-blue-600"
    },
  ];

  const facilities = [
    { 
      icon: <Activity className="w-8 h-8 text-green-600" />, 
      title: "Modular Operation Theatre", 
      desc: "State-of-the-art laminar flow OT designed for complex orthopedic surgeries.",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Microscope className="w-8 h-8 text-green-600" />, 
      title: "Digital X-Ray & Imaging", 
      desc: "High-resolution digital X-ray, MRI and CT scan for precise diagnosis.",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Stethoscope className="w-8 h-8 text-green-600" />, 
      title: "Advanced Surgical Equipment", 
      desc: "Latest arthroscopy, navigation and implant technology for best outcomes.",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Ambulance className="w-8 h-8 text-green-600" />, 
      title: "24/7 Emergency Care", 
      desc: "Round-the-clock emergency trauma team always ready to respond.",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Activity className="w-8 h-8 text-green-600" />, 
      title: "Physiotherapy Unit", 
      desc: "Fully equipped rehab unit with certified physiotherapists for recovery.",
      bgColor: "bg-green-50"
    },
    { 
      icon: <Users className="w-8 h-8 text-green-600" />, 
      title: "Inpatient & Day Care", 
      desc: "Comfortable inpatient wards and convenient daycare surgery options.",
      bgColor: "bg-green-50"
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Award className="w-6 h-6 text-blue-600" />, color: "from-blue-500 to-blue-600" },
    { number: "5000+", label: "Surgeries Done", icon: <TrendingUp className="w-6 h-6 text-blue-600" />, color: "from-green-500 to-green-600" },
    { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-6 h-6 text-blue-600" />, color: "from-purple-500 to-purple-600" },
    { number: "24/7", label: "Emergency Care", icon: <Clock className="w-6 h-6 text-blue-600" />, color: "from-red-500 to-red-600" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      treatment: "Knee Replacement Patient",
      rating: 5,
      text: "Dr. Shaikh performed my total knee replacement surgery flawlessly. I was walking without pain within 3 weeks. The entire team was incredibly supportive throughout my recovery journey.",
      initial: "RK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      treatment: "Spine Surgery Patient",
      rating: 5,
      text: "After years of back pain, Modern Hospital gave me my life back. The diagnosis was accurate, the treatment was thorough, and the staff made sure I was comfortable at every step.",
      initial: "PS",
      image: "https://images.unsplash.com/photo-1494790108777-466d68e30859?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Amit Desai",
      treatment: "Sports Injury Patient",
      rating: 5,
      text: "Excellent care and professional staff. My ACL reconstruction was successful and physiotherapy helped me get back to sports quickly.",
      initial: "AD",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sneha Patil",
      treatment: "Fracture Care",
      rating: 5,
      text: "The trauma team handled my fracture emergency with such care and precision. Healing was quick and the follow-up physiotherapy was excellent.",
      initial: "SP",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Appointment request submitted successfully! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern Hospital"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-700/85"></div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Emergency Bar with animation */}
        <div className="absolute top-20 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 z-10 animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">24/7 Emergency Care Available - Call Now: +91 1234567890</span>
            </div>
            <a href="tel:+911234567890" className="flex items-center space-x-2 text-sm font-semibold hover:text-gray-200 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-4 h-4" />
              <span>Emergency Hotline</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 animate-bounce-in">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Specialized Orthopedic Hospital
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Advanced Orthopedic <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Care</span> with Compassion
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl leading-relaxed">
              Expert treatment for bones, joints, spine, and sports injuries. Combining cutting-edge technology with compassionate care for your recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:scale-105">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span>Call Now</span>
              </button>
            </div>
          </div>

          {/* Stats with animation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-xl sm:text-2xl font-bold text-white bg-gradient-to-r ${stat.color} bg-clip-text`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Floating Cards */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-on-scroll" id="about-content">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
                <BadgeCheck className="w-4 h-4 inline mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Dedicated to Advanced Bone & Joint Care</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern Hospital is a specialized orthopedic center dedicated to providing advanced bone and joint care. With experienced doctors and modern medical equipment, we ensure accurate diagnosis and effective treatment for all orthopedic conditions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of expert surgeons, physiotherapists, and medical professionals work together to deliver comprehensive care — from diagnosis to rehabilitation — using the latest evidence-based practices and surgical technologies.
              </p>
              <button className="group bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-x-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: <Award className="w-6 h-6 text-blue-600" />, title: "10+ Years of Excellence", desc: "Over a decade of specialized orthopedic care", color: "blue" },
                { icon: <Heart className="w-6 h-6 text-blue-600" />, title: "Patient-First Approach", desc: "Every treatment plan tailored to the individual", color: "red" },
                { icon: <Activity className="w-6 h-6 text-blue-600" />, title: "Advanced Techniques", desc: "Minimally invasive & precision surgical methods", color: "green" },
                { icon: <Clock className="w-6 h-6 text-blue-600" />, title: "24/7 Emergency Trauma", desc: "Round-the-clock trauma care and emergency services", color: "purple" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Effects */}
      <section id="services" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
              <Activity className="w-4 h-4 inline mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Orthopedic Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              From fracture care to complex joint replacement, we offer the full spectrum of orthopedic treatments under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section with 3D Effect */}
      <section id="doctor" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-semibold text-sm mb-4">
              <User className="w-4 h-4 inline mr-2" />
              Our Expert
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Lead Specialist</h2>
            <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto px-4">
              Trusted by thousands of patients for compassionate, expert orthopedic care. Available for Consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 bg-gradient-to-b from-blue-600 to-blue-800 p-6 sm:p-8 flex flex-col items-center text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full mb-4 flex items-center justify-center overflow-hidden border-4 border-white/50 transform group-hover:scale-110 transition-all duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                        alt="Dr. Shaikh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">Dr. Shaikh</h3>
                    <p className="text-blue-200">MS Orthopedics</p>
                  </div>
                </div>
                <div className="md:col-span-2 p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <p className="text-xs text-blue-200">Experience</p>
                      <p className="text-lg sm:text-xl font-bold text-white">10+ Years</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <p className="text-xs text-blue-200">Specialty</p>
                      <p className="text-sm sm:text-base font-bold text-white">Joint Replacement & Trauma Surgery</p>
                    </div>
                    <div className="col-span-2 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                      <p className="text-xs text-blue-200">Surgeries Performed</p>
                      <p className="text-lg sm:text-xl font-bold text-white">5,000+ Successful Procedures</p>
                    </div>
                  </div>
                  <button className="group w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                    <Calendar className="w-5 h-5 inline mr-2 group-hover:rotate-12 transition-transform" />
                    Book Appointment with Dr. Shaikh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with Grid Animation */}
      <section id="facilities" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-600 font-semibold text-sm mb-4">
              <ShieldCheck className="w-4 h-4 inline mr-2" />
              World-Class Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Equipped for Excellence</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Our hospital is outfitted with cutting-edge infrastructure to ensure the highest standards of care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 ${facility.bgColor} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300`}>
                    {facility.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel for Mobile */}
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-4">
              <Quote className="w-4 h-4 inline mr-2" />
              Patient Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
            <p className="text-base sm:text-lg text-blue-200">Thousands of patients trust us with their care. Here are some of their stories.</p>
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-xl shadow-xl p-6">
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? 'w-8 bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 line-clamp-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form with Floating Labels */}
      <section id="appointment" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
              <Calendar className="w-4 h-4 inline mr-2" />
              Book Appointment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Fill in your details and our team will confirm your appointment within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 transform hover:scale-105 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Required *</label>
                    <select 
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                      required
                    >
                      <option>Select treatment...</option>
                      <option>Joint Replacement Surgery</option>
                      <option>Fracture & Trauma Care</option>
                      <option>Spine Treatment</option>
                      <option>Arthroscopy</option>
                      <option>Sports Injury Treatment</option>
                      <option>Physiotherapy & Rehab</option>
                      <option>Pediatric Orthopedics</option>
                      <option>Osteoporosis Management</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 group-hover:border-blue-400 resize-none"
                    placeholder="Describe your symptoms or any additional information..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 inline mr-2 group-hover:rotate-12 transition-transform" />
                  Submit Appointment Request
                </button>
                <p className="text-sm text-gray-500 text-center mt-4 animate-pulse">
                  We'll confirm your appointment within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

{/* Location Section with Interactive Map */}
<section id="location" className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
      <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
        <MapPin className="w-4 h-4 inline mr-2" />
        Our Location & Contact
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conveniently located and always reachable</h2>
      <p className="text-base sm:text-lg text-gray-600">Visit us or get in touch today.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
      <div className="h-64 sm:h-96 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 animate-on-scroll">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5216!2d73.8765!3d18.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0a4e5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sModern%20Hospital%20-%20Orthopedic%20Hospital!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Modern Hospital, Camp, Pune"
          className="w-full h-full"
        ></iframe>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-all duration-500 animate-on-scroll">
        <div className="space-y-4 sm:space-y-6">
          <div className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-sm sm:text-base text-gray-600">Modern Hospital - Orthopedic Center<br />
              Camp, Pune<br />
              Maharashtra - 411001, India</p>
            </div>
          </div>
          
          <div className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
            <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-sm sm:text-base text-gray-600">+91 123 456 7890<br />
              <span className="text-red-600 font-semibold">Emergency: +91 123 456 7891</span></p>
            </div>
          </div>
          
          <div className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
            <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm sm:text-base text-gray-600">info@modernhospitalpune.in</p>
            </div>
          </div>

          <div className="border-t pt-4 sm:pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <span className="text-sm sm:text-base text-gray-600">Mon-Sat:</span>
                <span className="font-medium text-gray-900">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <span className="text-sm sm:text-base text-gray-600">Sunday:</span>
                <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                <span className="text-sm sm:text-base text-red-600 font-semibold">Emergency:</span>
                <span className="font-medium text-red-600 animate-pulse">24/7 Available</span>
              </div>
            </div>
          </div>
          
          {/* Google Maps Link Button */}
          <div className="mt-4">
            <a 
              href="https://maps.app.goo.gl/ev5nVZJr9Pu5SK2R7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 group"
            >
              <span>Open in Google Maps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Landing;