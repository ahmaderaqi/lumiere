import Layout from '@/components/layout/layout';
import React from 'react';

const FaqItem = ({ question, answer }) => {
    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    );
};

const Faq = () => {
    const faqData = [
        {
            question: 'What is Raise A Ticket?',
            answer: 'Lumière is a comprehensive support system dedicated to empowering individuals,particularly exchange students, as they navigate the complexities of international education and integration'
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach our customer support team by navigating to the "Contact Us" section on our website. Alternatively, you can also send an email to lumierejord@gmail.com.'
        },
       
    ];
    

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h1>
                <div className="space-y-8">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
        </Layout>
        
    );
};

export default Faq;
