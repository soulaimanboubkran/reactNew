import React, { useState } from 'react'




export const Kg = () => {
    const [bmi,setBMI] =useState(0);
    const [formData, setFormData] = useState({
        id: Date.now(),
        weight:0,
        hight:0,
      });
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({...prev,[name]: value,}));
      };
const handleKg=()=>{
try {
    let hight =(formData.hight);
    let weight = formData.weight;
    let BMI  = weight/(hight**2)
    setBMI(BMI);
    console.log(BMI)
} catch (error) {
    console.log(error)
}
    
}



  return (
    <div className="mx-auto max-w-md space-y-6">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Health Data</h1>
      <p className="text-gray-500 dark:text-gray-400">Enter your weight and height</p>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        
        >
          Weight (in kilograms)
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="weight"
          placeholder="Enter your weight"
          required=""
          type="number"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        
        >
          Height (in m.cm)
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="hight"
          placeholder="Enter your height"
          required=""
          type="number"
          onChange={handleChange}
        />
      </div>
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
       onClick={handleKg}
      >
        Submit
      </button>
    </div> {bmi < 18.5 ? (
      <>
        <img src="/public/bmi1.jpeg" alt="BMI 1" />
        <p>Your BMI is: {bmi}</p>
       <img src="/public/bmi 1.jpeg" alt="" />
      </>
    ) : bmi >= 18.5 && bmi < 25 ? (
      <>

        <p>Your BMI is: {bmi}</p>
        <img src="/public/bmi 2.jpeg" alt="" />
      </>
    ) : bmi >= 25 && bmi < 30 ? (
      <>
      
        <p>Your BMI is: {bmi}</p>
        <img src="/public/bmi 3.jpeg" alt="" />
      </>
    ) : bmi >= 30 && bmi < 35 ? (
      <>
       
        <p>Your BMI is: {bmi}</p>
        <img src="/public/bmi 4.jpeg" alt="" />
      </>
    ) : (
      <>
       
        <p>Your BMI is: {bmi}</p>
        <img src="/public/bmi 5.jpeg" alt="" />
      </>
    )}
  </div>


  )
}
