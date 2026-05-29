import { useState } from 'react'
import { motion } from 'framer-motion'

const faqData = [
  {
    category: 'Income Tax',
    questions: [
      {
        question: 'Which ITR form should I file?',
        answer:
          'The correct ITR form depends on your income source, profession, business type and capital gains.',
      },

      {
        question: 'What documents are required for ITR filing?',
        answer:
          'PAN Card, Aadhaar Card, Form 16, AIS, Form 26AS, bank statements, investment proofs and capital gain statements are commonly required.',
      },

      {
        question: 'What happens if I file ITR late?',
        answer:
          'Late filing may attract penalties, interest and loss of certain carry-forward benefits.',
      },

      {
        question: 'Who needs TAN registration?',
        answer:
          'Businesses and entities deducting TDS are required to obtain TAN registration.',
      },

      {
        question: 'Can salaried individuals claim deductions?',
        answer:
          'Yes. Deductions under Section 80C, 80D, HRA and home loan benefits may be claimed depending on eligibility.',
      },
    ],
  },

  {
    category: 'GST',
    questions: [
      {
        question: 'Who needs GST registration?',
        answer:
          'Businesses exceeding prescribed turnover limits or selling online generally require GST registration.',
      },

      {
        question: 'What documents are required for GST registration?',
        answer:
          'PAN Card, Aadhaar, business address proof, bank details and business registration documents are commonly required.',
      },

      {
        question: 'How often are GST returns filed?',
        answer:
          'GST return frequency depends on the type of taxpayer and turnover category.',
      },

      {
        question: 'What happens if GST returns are not filed?',
        answer:
          'Late fees, interest and notices may be issued for non-compliance.',
      },

      {
        question: 'Can I cancel GST registration later?',
        answer:
          'Yes, GST registration can be surrendered subject to eligibility and proper filing.',
      },
    ],
  },

  {
    category: 'Company Registration',
    questions: [
      {
        question: 'Which is better: Pvt Ltd or LLP?',
        answer:
          'Both structures have different compliance, taxation and operational benefits depending on business goals.',
      },

      {
        question: 'How long does company registration take?',
        answer:
          'Usually company incorporation may take a few working days depending on approvals and document submission.',
      },

      {
        question: 'What documents are required for company registration?',
        answer:
          'PAN, Aadhaar, address proof, passport-size photo and office address proof are generally required.',
      },

      {
        question: 'Is DSC mandatory for company registration?',
        answer:
          'Yes, Digital Signature Certificates are mandatory for directors and designated partners.',
      },

      {
        question: 'Can a single person start a company?',
        answer:
          'Yes, a One Person Company (OPC) structure is available for individual entrepreneurs.',
      },
    ],
  },

  {
    category: 'Loans & Finance',
    questions: [
      {
        question: 'Do you assist with business loans?',
        answer:
          'Yes, we assist clients with project loans, working capital loans and term loans.',
      },

      {
        question: 'What is CMA data?',
        answer:
          'CMA data is a financial report generally required by banks for loan processing and credit assessment.',
      },

      {
        question: 'Can you help with home loan documentation?',
        answer:
          'Yes, we assist in financial document preparation and advisory for home loans.',
      },
    ],
  },

  {
    category: 'Digital Signature Certificate',
    questions: [
      {
        question: 'What is a DSC?',
        answer:
          'A Digital Signature Certificate is an electronic signature used for secure online filing and registrations.',
      },

      {
        question: 'Where is DSC used?',
        answer:
          'DSC is commonly used in MCA filings, Income Tax filings, GST filings and company compliance work.',
      },

      {
        question: 'How long is DSC valid?',
        answer:
          'DSC validity depends on the certificate type and issuing authority.',
      },
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  let faqCounter = 0

  return (
    <section className="section faq-page">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-badge">
            Frequently Asked Questions
          </span>

          <h1 className="page-title">
            Common Questions About Taxation,
            GST, Compliance & Registrations
          </h1>

          <p className="about-intro">
            Find answers to commonly asked questions
            related to Income Tax, GST, Company
            Registration, Loans and Digital Signatures.
          </p>

        </motion.div>

        {/* FAQ Categories */}
        {faqData.map((category, categoryIndex) => (

          <motion.div
            key={categoryIndex}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5 }}
          >

            <h2 className="faq-category">
              {category.category}
            </h2>

            <div className="faq-group">

              {category.questions.map((faq, index) => {

                const currentIndex = faqCounter++

                return (
                  <div
                    key={index}
                    className="faq-item"
                  >

                    <button
                      className="faq-question"

                      onClick={() =>
                        toggleFAQ(currentIndex)
                      }
                    >

                      <span>
                        {faq.question}
                      </span>

                      <span>
                        {openIndex === currentIndex ? '−' : '+'}
                      </span>

                    </button>

                    {openIndex === currentIndex && (

                      <motion.div
                        className="faq-answer"

                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: 'auto',
                        }}

                        transition={{
                          duration: 0.3,
                        }}
                      >

                        <p>
                          {faq.answer}
                        </p>

                      </motion.div>

                    )}

                  </div>
                )
              })}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  )
}
