import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const trustedBrands = [
	{ name: 'Nvidia', logo: '/assets/nvidia-logo.png' },
	{ name: 'Daikin', logo: '/assets/daikin-logo.png' },
	{ name: 'Analog Devices', logo: '/assets/analog-logo.png' },
	{ name: 'Tata Elxsi', logo: '/assets/tata-logo.png' },
	{ name: 'Indian Institute of Science', logo: '/assets/iisc-logo.png' },
	{ name: 'eInfochips', logo: '/assets/entochip-logo.png' },
];

const highlights = [
	{
		title: "They're trying to build hardware for the software",
		description: "But the existing hardware is not compatible enough to compliment their software.",
	},
	{
		title: "They're trying to build a software for the existing hardware",
		description: "The team attempts to build from scratch, but struggle due to the new technology and lack of experience integrating open source solutions.",
	},
];

const teamNames = ['DIADEM', 'CEPHEUS', 'ACRUX'];

export default function Home() {
	return (
		<div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', background: '#18111c' }}>
			<Navbar />
			<main style={{ width: '100%', margin: 0, padding: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
				{/* Hero Section */}
				<section style={{ background: '#1565c0', color: '#fff', padding: '3em 0 2em 0', textAlign: 'center', position: 'relative', width: '100%' }}>
					<div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
						<div style={{ flex: 1, minWidth: 320, textAlign: 'left' }}>
							<h1 style={{ fontSize: '2em', fontWeight: 700, lineHeight: 1.2 }}>
								India's Most Advanced TinyML, Robotics<br />And Embedded Kit
							</h1>
							<p style={{ margin: '24px 0 16px 0', fontSize: '1.1em', color: '#e0e0e0' }}>
								We are pioneers in the development of innovative robots that push the boundaries of what automation can achieve.
							</p>
							<a href="#contact" className="cta-btn" style={{ background: '#ff4fcf', color: '#fff', fontWeight: 600, padding: '0.8em 2em', borderRadius: '6px', textDecoration: 'none', fontSize: '1em', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginRight: '1em' }}>Get Started</a>
							<a href="#contact" className="cta-btn" style={{ background: '#6c3fcf', color: '#fff', fontWeight: 600, padding: '0.8em 2em', borderRadius: '6px', textDecoration: 'none', fontSize: '1em', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>Hire Us</a>
						</div>
						<div style={{ flex: 1, minWidth: 320, textAlign: 'right' }}>
							<img src="/assets/robot-main.png" alt="Main Robot" style={{ maxWidth: '400px', width: '100%', borderRadius: '16px', marginTop: 24 }} />
						</div>
					</div>
				</section>
				{/* Features Section */}
				<section style={{ background: '#fff', color: '#222', padding: '2em 0', textAlign: 'center', width: '100%' }}>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '2em', flexWrap: 'wrap', alignItems: 'center', width: '100%' }}>
						<div style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
							<img src="/assets/Industrial_Robotics.png" alt="Industrial Robotics" style={{ height: 64, marginBottom: 8 }} />
							<h3 style={{ fontWeight: 700, marginBottom: 8 }}>Industrial Robotics</h3>
							<p style={{ fontSize: '0.95em', color: '#444' }}>Our industrial robots are designed to streamline operations, increase efficiency, and enhance safety in manufacturing, logistics, and beyond.</p>
						</div>
						<div style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
							<img src="/assets/AI_ML_Robotics.png" alt="AI & ML Robotics" style={{ height: 64, marginBottom: 8 }} />
							<h3 style={{ fontWeight: 700, marginBottom: 8 }}>AI & ML Robotics</h3>
							<p style={{ fontSize: '0.95em', color: '#444' }}>We leverage the power of artificial intelligence and machine learning to create robots that can adapt, learn, and optimize their performance over time.</p>
						</div>
						<div style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
							<img src="/assets/Edu_Bot.png" alt="EduBot" style={{ height: 64, marginBottom: 8 }} />
							<h3 style={{ fontWeight: 700, marginBottom: 8 }}>EduBot</h3>
							<p style={{ fontSize: '0.95em', color: '#444' }}>AI-powered chatbots that provide personalized learning assistance to students. They can answer questions, provide feedback, and help students learn at their own pace.</p>
						</div>
					</div>
				</section>
				{/* Featured Work Section */}
				<section style={{ background: '#fff', color: '#222', padding: '2em 0', textAlign: 'center', width: '100%' }}>
					<h2 style={{ fontWeight: 700, fontSize: '2em', marginBottom: '1em' }}>Featured Work</h2>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '2em', flexWrap: 'wrap', alignItems: 'flex-start', width: '100%' }}>
						<div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: '#ffd6f7', borderRadius: '16px', padding: '1em', marginBottom: '1em' }}>
							<img src="/assets/f_w1.jpg" alt="TinyML Robot" style={{ width: '100%', borderRadius: '12px', marginBottom: '1em' }} />
							<h3 style={{ fontWeight: 700, marginBottom: 8 }}>TinyML And Robotics</h3>
							<p style={{ fontSize: '0.95em', color: '#444' }}>We are pioneers in the development of innovative robots that push the boundaries of what automation can achieve.</p>
						</div>
						<div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: '#fff', borderRadius: '16px', padding: '1em', marginBottom: '1em' }}>
							<img src="/assets/f_w2.jpg" alt="EduBot Featured" style={{ width: '100%', borderRadius: '12px', marginBottom: '1em' }} />
							<h3 style={{ fontWeight: 700, marginBottom: 8 }}>EduBot</h3>
							<p style={{ fontSize: '0.95em', color: '#444' }}>AI-powered chatbots that provide personalized learning assistance to students.</p>
						</div>
					</div>
				</section>
				{/* Footer Section */}
				<footer style={{ background: '#222', color: '#fff', padding: '2em 0', textAlign: 'center', width: '100%' }}>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '4em', flexWrap: 'wrap', alignItems: 'flex-start', width: '100%' }}>
						<div style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
							<h4 style={{ color: '#3f51b5', fontWeight: 700 }}>PUNE</h4>
							<p style={{ fontSize: '0.95em', color: '#fff' }}>1st Floor, Gokul Building, Dnyaneshwar Paduka Chowk,<br />FC Road, Shivajinagar, Pune 411005<br />Ecruxbot: +91 92255 73273<br />ecruxbot@gmail.com</p>
						</div>
						<div style={{ flex: 1, minWidth: 220, maxWidth: 320 }}>
							<h4 style={{ color: '#3f51b5', fontWeight: 700 }}>JALGAON</h4>
							<p style={{ fontSize: '0.95em', color: '#fff' }}>2nd Floor, Near M. J. College,<br />Jalgaon, Maharashtra, 425001 – India<br />Ecruxbot: +91 92255 73273<br />ecruxbot@gmail.com</p>
						</div>
					</div>
					<div style={{ marginTop: '2em', fontSize: '0.95em', color: '#bbb' }}>
						© 2022-2025 Ecruxbot.in. All rights reserved.
					</div>
				</footer>
			</main>
		</div>
	);
}