import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClearIcon from "@material-ui/icons/Clear";

import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="">
        <div className="body__syllabus">
          <h2>Add Syllabus</h2>
          <h2></h2>
          <h2></h2>
        </div>
        <div className="body__subject">
          <h2 className="header__physics">Physics</h2>
          <h2 className="header__chemistry">Chemistry</h2>
          <h2 className="header__maths">Maths</h2>
        </div>
        <div className="body__footer">
          <div className="body__left">
            <div>
              <h5>Chapters</h5>
              <div className="body__chapters">
                <div className="body__chapterName">
                  <p>Trigonometry</p>
                  <p>Probability</p>
                  <p>Progression</p>
                  <p>...</p>
                  <p>3</p>
                  <ArrowDropUpIcon />
                </div>
                <div className="body__chapterNumber">
                  <div>
                    <h6>
                      <div className="body__square1"></div>
                      Chapter 1
                    </h6>
                    <h6>
                      <div className="body__square2"></div>
                      Chapter 2
                    </h6>
                    <h6>
                      <div className="body__square3"></div>
                      Chapter 3
                    </h6>
                    <h6>
                      <div className="body__square4"></div>
                      Chapter 4
                    </h6>
                    <h6>
                      <div className="body__square5"></div>
                      Chapter 5
                    </h6>
                    <h6>
                      <div className="body__square6"></div>
                      Chapter 6
                    </h6>
                  </div>

                  <div>
                    <h6>
                      <div className="body__square7"></div>
                      Chapter 7
                    </h6>
                    <h6>
                      <div className="body__square8"></div>
                      Chapter 8
                    </h6>
                    <h6>
                      <div className="body__square9"></div>
                      Chapter 9
                    </h6>
                    <h6>
                      <div className="body__square10"></div>
                      Chapter 10
                    </h6>
                    <h6>
                      <div className="body__square11"></div>
                      Chapter 11
                    </h6>
                    <h6>
                      <div className="body__square12"></div>
                      Chapter 12
                    </h6>
                  </div>
                  <div>
                    <h6>
                      <div className="body__square13"></div>
                      Chapter 13
                    </h6>
                    <h6>
                      <div className="body__square14"></div>
                      Chapter 14
                    </h6>
                    <h6>
                      <div className="body__square15"></div>
                      Chapter 15
                    </h6>
                    <h6>
                      <div className="body__square16"></div>
                      Chapter 16
                    </h6>
                    <h6>
                      <div className="body__square17"></div>
                      Chapter 17
                    </h6>
                    <h6>
                      <div className="body__square18"></div>
                      Chapter 18
                    </h6>
                  </div>
                </div>
                <div className="body__clear__done">
                  <h6 className="body__clear">
                    <ClearIcon className="body__clearIcon" />
                    Clear
                  </h6>
                  <h6>Done</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="body__center">
            <div className="">
              <h5>Concepts</h5>
              <div className="body__concepts">
                <div className="body__concepts__elements">
                  <h6>Choose a tag</h6>
                  <ArrowDropDownIcon className="body__dropdown" />
                </div>
              </div>
            </div>
          </div>
          <div className="body__right">
            <div className="">
              <h5>Sub-Concepts</h5>
              <div className="body__subconcepts">
                <div className="body__subconcepts__elements">
                  <h6>Choose a tag</h6>
                  <ArrowDropDownIcon className="body__dropdown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
