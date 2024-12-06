import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isBlocked, setIsBlocked] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [clearCount, setClearCount] = useState(0);
  const [value, setValue] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  const [birthDate, setBirthDate] = useState('');
  const [changeCount, setChangeCount] = useState(0); // To track how many times the date has been changed
  

  // Function to generate a random date between 1900 and 2020
  const generateRandomDate = () => {
    const startYear = 1900;
    const endYear = 2020;
    
    // Generate a random date
    const randomDate = new Date(startYear + Math.random() * (endYear - startYear), Math.random() * 12, Math.random() * 31);
    
    // Format the date to YYYY-MM-DD
    const formattedDate = randomDate.toISOString().split('T')[0];
    
    return formattedDate;
  };

  // Handle date change by the user
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    
    // Set the birthDate to the selected date
    setBirthDate(selectedDate);
    
    if (changeCount < 3) {
      // Increment changeCount to track how many times we've changed the date
      setChangeCount(changeCount + 1);
      
      // After the user selects the date, randomly change it
      const randomDate = generateRandomDate();
      setTimeout(() => {
        setBirthDate(randomDate);
      }, 500); // Add a delay before changing the date
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Inverser l'état de la checkbox
  };

  const handleFinishAction = () => {
    setIsChecked(false); // Décocher la checkbox après la fin de l'action
    
    // Déterminer le message en fonction du compte avant de l'incrémenter
    if(count === 0) {
        setText("pas facile 🙂");
    } else if(count === 1) {
        setText("essayer encore !! 🙂");
    } else if(count === 2) {
        setText("nope 🙂");
    }

    // Incrémenter le compteur après avoir défini le message
    setCount(count + 1); 
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (clearCount < 5 && emailValue.includes('@')) {
      setEmail('');
      setClearCount(clearCount + 1);
      alert(`Le caractère "@" n'est pas encore autorisé. \nEssais restants: Je vais te laisser deviner... Jajaja `);
    }
  };

  useEffect(() => {
    const unblockInput = setTimeout(() => {
      setIsBlocked(false);
    }, 120000); // 2 minutes

    return () => clearTimeout(unblockInput); // Cleanup the timeout
  }, []);

  const handleInputChange = (e) => {
    if (isBlocked) {
      setInputValue('');
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  // Password validation functions
  const hasMinuscule = (password) => /[a-z]/.test(password);
  const hasMajuscule = (password) => /[A-Z]/.test(password);
  const hasSymbols = (password) => /[^a-zA-Z0-9]/.test(password);
  const countSymbols = (password) => (password.match(/[^a-zA-Z0-9]/g) || []).length;
  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  
    let newMessage = '';
    
    // Add messages for each condition
    if (!hasMinuscule(newPassword)) {
      newMessage += "Le mot de passe doit contenir des lettres minuscules. ";
    } 
    if (!hasMajuscule(newPassword)) {
      newMessage += "Le mot de passe doit contenir des lettres majuscules. ";
    } 
    if (!hasSymbols(newPassword)) {
      newMessage += "Le mot de passe doit inclure des symboles. ";
    } 
    if (countSymbols(newPassword) < 10) {
      newMessage += "Pas assez de symboles, mot de passe facile. ";
    } 
    if (countSymbols(newPassword) > 3) {
      newMessage += "C'est un mot de passe fort. Laisse-le facile! ";
    }
  
    // Clear message if no symbols
    if (countSymbols(newPassword) === 0) {
      newMessage = ''; // Clear the message if no symbols
    }
  
    setMessage(newMessage);
  };
  

  const isFormValid = email && password && inputValue && birthDate && isChecked;

  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Prêt pour découvrir le secret ?
          </h5>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            {message && (
              <div className="text-sm text-red-500 mt-2">{message}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirmez votre mot de passe
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={
                isBlocked ? "Pas encore ! 😜" : "Vous pouvez écrire..."
              }
              style={{
                padding: "10px",
                borderRadius: "5px",
                width: "300px",
                backgroundColor: isBlocked ? "#f8d7da" : "#d4edda",
                border: "1px solid",
                borderColor: isBlocked ? "#f5c6cb" : "#c3e6cb",
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="num"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Numéro de téléphone
            </label>
            <input
              type="range"
              id="volumeSlider"
              min="0"
              max="99999999"
              value={value}
              onChange={handleSliderChange}
              step="1"
              style={{ width: "100%" }}
              required
            />
            <span>{value}</span>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date de naissance
            </label>
            <input
              type="date"
              id="birthdate"
              value={birthDate}
              onChange={handleDateChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Rappelez-moi
            </label>
            <br />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {text}
            </label>
          </div>

          <br></br>
          {count < 3 ? (
            <button
              disabled={!isFormValid}
              onClick={handleFinishAction}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              S'inscrire
            </button>
          ) : (
            <Link to="/message">
              <button
                disabled={!isFormValid}
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                S'inscrire
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;








