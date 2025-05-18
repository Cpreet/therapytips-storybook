const PersonalityTestQuestions = () => {
  const questions = [
    {
      question: "I am the life of the party.",
      options: [
        "",
        "Strongly disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly agree",
      ],
    },
    {
      question: "I don't talk a lot.",
      options: [
        "",
        "Strongly disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly agree",
      ],
    },
    {
      question: "I love hanging out with my friends.",
      options: [
        "",
        "Strongly disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly agree",
      ],
    },
  ];
  const ageOptions = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64"];
  const genderOptions = [
    "Male",
    "Female",
    "Non-binary",
    "Transgender",
    "Other",
  ];
  const regionOptions = [
    "North America",
    "South America / Central America",
    "Europe",
    "Asia",
    "Middle East",
    "Africa",
    "Australia",
    "Other",
  ];
  return (
    <div className="flex flex-col gap-2">
      <hr />
      <hr />
      <h2 className="text-xl">
        <strong>Step 1:</strong> Rate the following statements based on how much
        you agree with them on a scale of strongly disagree to strongly agree.
      </h2>
      <ol className="list-decimal list-inside space-y-4">
        {questions.map((question, index) => (
          <li key={index} className="text-lg italic">
            {question.question}
            <select className="border border-gray-300 ml-2">
              {question.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </li>
        ))}
      </ol>
      <hr />
      <hr />
      <h2 className="text-xl">
        <strong>Step 2:</strong> Enter your age, gender, region, and first name
        so we can provide you with a detailed report that compares your test
        scores to people similar to you.
      </h2>
      <ul className="space-y-4 text-lg italic">
        <li>
          <label htmlFor="age">What is your age?</label>
          <select id="age" className="border border-gray-300 ml-2">
            {ageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor="gender">What is your gender?</label>
          <select id="gender" className="border border-gray-300 ml-2">
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor="region">What region of the world are you from?</label>
          <select id="region" className="border border-gray-300 ml-2">
            {regionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor="firstName">What is your first name?</label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-300 ml-2"
          />
        </li>
      </ul>
      <hr />
      <hr />
      <h2 className="text-lg">
        <strong>Step 3:</strong> Check to make sure you've provided answers to
        all of the statements/questions above. Once you've done that, click the
        button below to send your responses to Awake Therapy's Lead
        Psychologist, Mark Travers, Ph.D. He will provide you with an overview
        of how you scored relative to others (all answers are anonymized and
        confidential to protect users' privacy). He can also answer any
        follow-up questions you may have.
      </h2>
      <button
        className="border border-black bg-gray-200 rounded-xs self-start px-2 
      hover:bg-gray-300 hover:cursor-pointer active:bg-gray-100"
      >
        Submit My Answers!
      </button>
    </div>
  );
};

export default PersonalityTestQuestions;
