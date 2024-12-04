"use client";
import { useState } from "react";

const FAQ = () => {
  // Subjects with topics, questions, and answers
  const subjects = [
    {
      subjectName: "Physics",
      topics: [
        {
          topicName: "Motion",
          questions: [
            {
              question: "What is uniform motion?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>Answer: </b>
                  When an object travels equal distances in equal intervals of time, it is said to be in <b style={{ color: "blue" }}>uniform motion</b>.
                </div>
              ),
            },
            {
              question: "What is acceleration?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>Answer: </b>
                  The rate of change of velocity of an object with respect to time is called <b style={{ color: "blue" }}>acceleration</b>.
                </div>
              ),
            },
          ],
        },
        {
          topicName: "Gravitation",
          questions: [
            {
              question: "What is the universal law of gravitation?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>Answer: </b>
                  Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      subjectName: "Chemistry",
      topics: [
        {
          topicName: "Periodic Table",
          questions: [
            {
              question: "What is the periodic law?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>Answer: </b>
                  The properties of elements are the periodic function of their atomic numbers.
                </div>
              ),
            },
          ],
        },
      ],
    },
    {
      subjectName: "Biology",
      topics: [
        {
          topicName: "Cell Structure",
          questions: [
            {
              question: "What is the function of the nucleus in a cell?",
              answer: (
                <div>
                  <b style={{ color: "green" }}>Answer: </b>
                  The nucleus controls all cellular activities and contains genetic material (DNA).
                </div>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        Frequently Asked Questions
      </h1>
      {subjects.map((subject, subjectIndex) => (
        <Subject
          key={subjectIndex}
          subject={subject}
          subjectIndex={subjectIndex + 1} // Add subject number
        />
      ))}
    </div>
  );
};

// Subject Component
const Subject = ({ subject, subjectIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <h2
        className="text-2xl font-semibold bg-indigo-300 px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`Subject ${subjectIndex}: ${subject.subjectName}`}
      </h2>
      {isOpen &&
        subject.topics.map((topic, topicIndex) => (
          <Topic
            key={topicIndex}
            topic={topic}
            topicIndex={topicIndex + 1}
            subjectIndex={subjectIndex}
          />
        ))}
    </div>
  );
};

// Topic Component
const Topic = ({ topic, topicIndex, subjectIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg my-2">
      <h3
        className="text-xl font-semibold bg-indigo-100 px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`Topic ${subjectIndex}.${topicIndex}: ${topic.topicName}`}
      </h3>
      {isOpen &&
        topic.questions.map((faq, questionIndex) => (
          <QuestionAnswer key={questionIndex} faq={faq} />
        ))}
    </div>
  );
};

// QuestionAnswer Component
const QuestionAnswer = ({ faq }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg my-2 px-4 py-2">
      <h4
        className="text-lg font-medium cursor-pointer"
        onClick={() => setIsAnswerOpen(!isAnswerOpen)}
      >
        {faq.question}
      </h4>
      {isAnswerOpen && <div className="mt-2">{faq.answer}</div>}
    </div>
  );
};

export default FAQ;
