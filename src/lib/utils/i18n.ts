import { writable } from 'svelte/store';

// Language store
export const currentLanguage = writable<'de' | 'en'>('de');

// Translation data
export const translations = {
	de: {
		// Navigation
		nav: {
			cases: 'Cases',
			stack: 'Stack',
			contact: 'Kontakt'
		},
		
		// Hero Section
		hero: {
			title: {
				line1: 'Automation',
				line2: 'mit',
				line3: 'Datenschutz-DNA'
			},
			description: 'Intelligente Workflow-Optimierung für Unternehmen, die Effizienz und Compliance gleichzeitig ernst nehmen.',
			cta: {
				learnMore: 'Mehr erfahren',
				contact: 'Kontakt'
			}
		},
		
		// Case Studies
		cases: {
			title: 'Case Studies',
			subtitle: 'Vertrauen durch Transparenz',
			items: [
				{
					id: '01',
					title: 'Manufacturing Workflow',
					subtitle: 'Produktionsautomatisierung',
					description: 'Vollständige Digitalisierung der Fertigungsprozesse mit DSGVO-konformer Datenverarbeitung und 40% Effizienzsteigerung.',
					metrics: ['<span class="metric-40">40</span>% Effizienzsteigerung', 'DSGVO-konforme Umsetzung', '24/7 Monitoring'],
					tags: ['Manufacturing', 'IoT', 'Compliance']
				},
				{
					id: '02',
					title: 'Financial Data Pipeline',
					subtitle: 'Finanzprozess-Optimierung',
					description: 'Automatisierte Datenverarbeitung mit End-to-End-Verschlüsselung und regulatorischer Compliance für Finanzdienstleister.',
					metrics: ['<span class="metric-99">99.9</span>% Verfügbarkeit', 'End-to-End Verschlüsselung', 'BaFin-konform'],
					tags: ['Finance', 'Security', 'Compliance']
				},
				{
					id: '03',
					title: 'Healthcare Integration',
					subtitle: 'Medizin-Workflow',
					description: 'Sichere Patientendaten-Workflows mit höchsten Datenschutzstandards und nahtloser Systemintegration.',
					metrics: ['<span class="metric-100">100</span>% Datenschutz', 'HL7-kompatibel', '<span class="metric-50">50</span>% Zeitersparnis'],
					tags: ['Healthcare', 'Integration', 'Privacy']
				}
			]
		},
		
		// Tech Stack
		tech: {
			title: 'Technology Stack',
			subtitle: 'Engineering mit Prinzipien',
			categories: [
				{
					category: 'Automation Core',
					technologies: [
						{ name: 'Process Mining', description: 'Workflow-Analyse & Optimierung' },
						{ name: 'RPA Integration', description: 'Robotic Process Automation' },
						{ name: 'API Orchestration', description: 'Systemverbindungen & Workflows' },
						{ name: 'Event Streaming', description: 'Real-time Datenverarbeitung' }
					]
				},
				{
					category: 'Privacy & Compliance',
					technologies: [
						{ name: 'DSGVO Framework', description: 'Datenschutz by Design' },
						{ name: 'Zero-Trust Security', description: 'End-to-End Verschlüsselung' },
						{ name: 'Audit Logging', description: 'Vollständige Nachverfolgbarkeit' },
						{ name: 'Data Minimization', description: 'Prinzip der Datenminimierung' }
					]
				},
				{
					category: 'Infrastructure',
					technologies: [
						{ name: 'Kubernetes', description: 'Container Orchestration' },
						{ name: 'Infrastructure as Code', description: 'Terraform & GitOps' },
						{ name: 'Observability', description: 'Monitoring & Alerting' },
						{ name: 'Edge Computing', description: 'Dezentrale Verarbeitung' }
					]
				}
			],
			cta: 'Technische Details & Architektur'
		},
		
		// Contact
		contact: {
			title: 'Kontakt',
			subtitle: 'Lassen Sie uns sprechen',
			description: 'Automatisierung beginnt mit dem richtigen Gespräch. Wir analysieren Ihre Workflows und entwickeln maßgeschneiderte Lösungen, die Datenschutz und Effizienz vereinen.',
			methods: [
				{
					type: 'Email',
					value: 'hello@poly-agent.com',
					description: 'Direkter Draht für konkrete Projekte'
				},
				{
					type: 'Telefon',
					value: '+49 (0) 30 12345678',
					description: 'Montag bis Freitag, 9:00 - 18:00'
				},
				{
					type: 'LinkedIn',
					value: '/company/poly-agent',
					description: 'Berufliche Anfragen & Updates'
				}
			],
			privacy: {
				title: 'Datenschutz-Hinweis:',
				text: 'Ihre Anfrage wird verschlüsselt übertragen und DSGVO-konform verarbeitet. Keine Weiterleitung an Dritte, keine Marketing-Automation.'
			}
		},
		
		// Footer
		footer: '© 2025 Poly-Agent — Automation & Workflow Optimization'
	},
	
	en: {
		// Navigation
		nav: {
			cases: 'Cases',
			stack: 'Stack',
			contact: 'Contact'
		},
		
		// Hero Section
		hero: {
			title: {
				line1: 'Automation',
				line2: 'with',
				line3: 'Privacy-DNA'
			},
			description: 'Intelligent workflow optimization for companies that take efficiency and compliance seriously.',
			cta: {
				learnMore: 'Learn more',
				contact: 'Contact'
			}
		},
		
		// Case Studies
		cases: {
			title: 'Case Studies',
			subtitle: 'Trust through Transparency',
			items: [
				{
					id: '01',
					title: 'Manufacturing Workflow',
					subtitle: 'Production Automation',
					description: 'Complete digitization of manufacturing processes with GDPR-compliant data processing and 40% efficiency improvement.',
					metrics: ['<span class="metric-40">40</span>% Efficiency Improvement', 'GDPR-compliant Implementation', '24/7 Monitoring'],
					tags: ['Manufacturing', 'IoT', 'Compliance']
				},
				{
					id: '02',
					title: 'Financial Data Pipeline',
					subtitle: 'Financial Process Optimization',
					description: 'Automated data processing with end-to-end encryption and regulatory compliance for financial service providers.',
					metrics: ['<span class="metric-99">99.9</span>% Availability', 'End-to-End Encryption', 'BaFin-compliant'],
					tags: ['Finance', 'Security', 'Compliance']
				},
				{
					id: '03',
					title: 'Healthcare Integration',
					subtitle: 'Medical Workflow',
					description: 'Secure patient data workflows with highest privacy standards and seamless system integration.',
					metrics: ['<span class="metric-100">100</span>% Data Protection', 'HL7-compatible', '<span class="metric-50">50</span>% Time Savings'],
					tags: ['Healthcare', 'Integration', 'Privacy']
				}
			]
		},
		
		// Tech Stack
		tech: {
			title: 'Technology Stack',
			subtitle: 'Engineering with Principles',
			categories: [
				{
					category: 'Automation Core',
					technologies: [
						{ name: 'Process Mining', description: 'Workflow Analysis & Optimization' },
						{ name: 'RPA Integration', description: 'Robotic Process Automation' },
						{ name: 'API Orchestration', description: 'System Connections & Workflows' },
						{ name: 'Event Streaming', description: 'Real-time Data Processing' }
					]
				},
				{
					category: 'Privacy & Compliance',
					technologies: [
						{ name: 'GDPR Framework', description: 'Privacy by Design' },
						{ name: 'Zero-Trust Security', description: 'End-to-End Encryption' },
						{ name: 'Audit Logging', description: 'Complete Traceability' },
						{ name: 'Data Minimization', description: 'Data Minimization Principle' }
					]
				},
				{
					category: 'Infrastructure',
					technologies: [
						{ name: 'Kubernetes', description: 'Container Orchestration' },
						{ name: 'Infrastructure as Code', description: 'Terraform & GitOps' },
						{ name: 'Observability', description: 'Monitoring & Alerting' },
						{ name: 'Edge Computing', description: 'Decentralized Processing' }
					]
				}
			],
			cta: 'Technical Details & Architecture'
		},
		
		// Contact
		contact: {
			title: 'Contact',
			subtitle: 'Let\'s talk',
			description: 'Automation starts with the right conversation. We analyze your workflows and develop customized solutions that combine privacy and efficiency.',
			methods: [
				{
					type: 'Email',
					value: 'hello@poly-agent.com',
					description: 'Direct line for concrete projects'
				},
				{
					type: 'Phone',
					value: '+49 (0) 30 12345678',
					description: 'Monday to Friday, 9:00 - 18:00'
				},
				{
					type: 'LinkedIn',
					value: '/company/poly-agent',
					description: 'Professional inquiries & updates'
				}
			],
			privacy: {
				title: 'Privacy Notice:',
				text: 'Your request will be transmitted encrypted and processed in compliance with GDPR. No forwarding to third parties, no marketing automation.'
			}
		},
		
		// Footer
		footer: '© 2025 Poly-Agent — Automation & Workflow Optimization'
	}
};

// Toggle language function
export function toggleLanguage() {
	currentLanguage.update(lang => lang === 'de' ? 'en' : 'de');
}
