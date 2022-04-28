import React, { useState } from "react";
import "../TrainFareCalculator/Fare.css";

const Fare = () => {
  const [total, setTotal] = useState(0);
  const FirstClassAdult = 3000;
  const FirstClassTeen = 1500;
  const EconomyAdult = 1000;
  const EconomyTeen = 500;
  const child = 0;

  return (
    <div>
      <div className="heading">
        <h1>Train E3 - Mombasa Terminus to Nairobi Terminus</h1>
      </div>
      <div className="fare-class">
        <div className="class">
          <div className="first-class">
            <h1>FIRST CLASS - 134 SEATS OPEN</h1>
            <div className="para">
              <p>Adults</p>
              <p className="money">
                <b>ksh {FirstClassAdult}</b>
              </p>
            </div>
            <div className="para">
              <p>CHILDREN (BTW 3 - 11YRS)</p>
              <p className="money">
                <b>ksh {FirstClassTeen}</b>
              </p>
            </div>
            <div className="para">
              <p>CHILDREN (BELOW 3YRS)</p>
              <p className="money">
                <b>KSH {child} - FREE</b>
              </p>
            </div>
            <div className="time">
              <h2>DEPARTURE: 10:00 PM</h2>
            </div>
          </div>
          <div className="economy">
            <h1>ECONOMY - 810 SEATS OPEN</h1>
            <div className="para">
              <p>Adults</p>
              <p className="money">
                <b>ksh {EconomyAdult}</b>
              </p>
            </div>
            <div className="para">
              <p>CHILDREN (BTW 3 - 11YRS)</p>
              <p className="money">
                <b>ksh {EconomyTeen}</b>
              </p>
            </div>
            <div className="para">
              <p>CHILDREN (BELOW 3YRS)</p>
              <p className="money">
                <b>KSH {child} - FREE</b>
              </p>
            </div>
            <div className="time">
              <h2>Arrival: 03:00 PM</h2>
            </div>
          </div>
        </div>
        <div className="fare">
          <h1>Mombasa Terminus to Nairobi Terminus</h1>
          <p>Tain:E3</p>
          <div className="passengers">
            <div className="age">
              <div className="select">
                <label htmlFor="Adults">Adults </label>
                <select name="adults" id="adult">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="select">
                <label htmlFor="teanegers">Children (12-17YRS)</label>
                <select name="teeneger" id="teen">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="select">
                <label htmlFor="children">Children (3-11YRS)</label>
                <select name="children" id="child">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="select-class">
              <label htmlFor="coach-type">coach type</label>
              <select name="coaches" id="coach-type">
                <option value="economy">Economy</option>
                <option value="first class">First Class</option>
              </select>
            </div>
            <div className="coach-type">
              <h6>TOTAL FARE:</h6>
              <h3>KSH {total}</h3>
            </div>
            <div className="book-btn">Book a Train</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fare;
