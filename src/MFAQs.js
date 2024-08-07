import React, { useState } from 'react';
import './index.css';

const MFAQs = () => {
  const faqs = [
    {
      question: "What is a CIBIL score, and why is it important?",
      answer: "A CIBIL score is a three-digit number that represents your creditworthiness, ranging from 300 to 900. It is calculated based on your credit history, including loan and credit card payments. A higher score indicates good credit behavior, making it easier to secure loans or credit cards at favorable terms. Lenders use this score to evaluate the risk of lending to you.",
    },
    {
      question: "How can Pahal Credit Solutions help improve my CIBIL score?",
      answer: "Pahal Credit Solutions offers personalized analysis of your credit report to identify factors negatively affecting your score. We provide actionable insights and strategies to improve your credit health, such as correcting inaccuracies, managing debts effectively, and maintaining a balanced credit utilization ratio.",
    },
    {
      question: "What common errors can appear on a CIBIL report, and how can they be resolved?",
      answer: "Common errors in a CIBIL report may include incorrect personal information, outdated account details, and inaccuracies in credit accounts or loan balances. Pahal Credit Solutions assists in identifying these discrepancies and works with financial institutions to rectify them, ensuring your report accurately reflects your credit history.",
    },
    {
      question: "How long does it take to see improvements in my CIBIL score after corrections?",
      answer: "The time taken to see improvements in your CIBIL score varies depending on the type of corrections and your financial behavior. Typically, once errors are corrected, you may start seeing changes within 30-45 days. However, consistent positive credit behavior is crucial for long-term improvement.",
    },
    {
      question: "Can I check my CIBIL score for free? If so, how often should I check it?",
      answer: "Yes, you can check your CIBIL score for free once a year through the official CIBIL website or our platform at Pahal Credit Solutions. It is advisable to check your score periodically, at least twice a year, to monitor your credit health and address any discrepancies promptly.",
    },
    {
      question: "Does checking my own CIBIL score affect my credit rating?",
      answer: "No, checking your own CIBIL score is considered a soft inquiry and does not impact your credit rating. However, multiple hard inquiries by lenders within a short period can negatively affect your score. Monitoring your score regularly helps you stay informed without any adverse effects.",
    },
    {
      question: "How can I build a good CIBIL score if I have no credit history?",
      answer: "Building a good CIBIL score with no credit history involves starting with secured credit options, such as a secured credit card or a small personal loan. Ensure timely repayments and maintain a low credit utilization ratio. Over time, responsible credit usage will help establish a positive credit history and improve your score.",
    },
    {
      question: "Why should I choose Pahal Credit Solutions over other credit advisory services?",
      answer: "Pahal Credit Solutions stands out due to our personalized approach, expert analysis, and commitment to transparency. We focus on understanding your unique financial situation and provide tailored solutions to enhance your credit profile. Our goal is to empower you with the knowledge and tools needed to achieve financial success.",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="faq-toggle-icon">
                {visibleIndex === index ? '-' : '+'}
              </span>
            </div>
            {visibleIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MFAQs
