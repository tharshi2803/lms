import React from "react";
import "../subject/subject.css";
import image1 from "../../images/image1.jpg";

function Subject() {
  return (
      <div class="card-wrapper  | content-cc">
          <div class="sub-card">
              <div class="sub-ilustrations">
                  {/* <img class="mobile pattern"
                      
                      src={image1}>
                  </img> */}
                  <img class="mobile ilust"
                      src={image1}>
                  </img>

              </div>

              <main class="sub-content">
                  <h1>Subject </h1>

                  <div class="sub-articles">

                      <article class="sub-accordion">

                          <input type="checkbox" class="tgg-title" id="tgg-title-1" />

                          <div class="sub-accordion-title">
                              <label for="tgg-title-1">
                                  <h2>Lesson 1</h2>
                                  <span class="arrow-icon">
                                      <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                                  </span>
                              </label>
                          </div>

                          <div class="sub-accordion-content">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                  piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                              <div class="upload-btn-wrapper">
                                  <button class="btn">Upload a file</button>
                                  <input type="file" name="myfile" />
                              </div>
                          </div>

                      </article>

                      <article class="sub-accordion">

                          <input type="checkbox" class="tgg-title" id="tgg-title-2" />

                          <div class="sub-accordion-title">
                              <label for="tgg-title-2">
                                  <h2>
                                      Lesson 2
                                  </h2>
                                  <span class="arrow-icon">
                                      <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                                  </span>
                              </label>
                          </div>

                          <div class="sub-accordion-content">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                  piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                                  <div class="upload-btn-wrapper">
                                  <button class="btn">Upload a file</button>
                                  <input type="file" name="myfile" />
                              </div>
                          </div>

                      </article>

                      <article class="sub-accordion">

                          <input class="tgg-title" type="checkbox" id="tgg-title-3" />

                          <div class="sub-accordion-title">
                              <label for="tgg-title-3">
                                  <h2>
                                      Lesson 3
                                  </h2>
                                  <span class="arrow-icon">
                                      <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                                  </span>
                              </label>
                          </div>

                          <div class="sub-accordion-content">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                  piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                          </div>

                      </article>

                      <article class="sub-accordion">

                          <input class="tgg-title" type="checkbox" id="tgg-title-4" />

                          <div class="sub-accordion-title">
                              <label for="tgg-title-4">
                                  <h2>
                                      Lesson 4
                                  </h2>
                                  <span class="arrow-icon">
                                      <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                                  </span>
                              </label>
                          </div>

                          <div class="sub-accordion-content">
                              <p>
                                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                  piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                          </div>

                      </article>

                      <article class="sub-accordion">

                          <input class="tgg-title" type="checkbox" id="tgg-title-5" />

                          <div class="sub-accordion-title">
                              <label for="tgg-title-5">
                                  <h2>
                                      Lesson 5
                                  </h2>
                                  <span class="arrow-icon">
                                      <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                                  </span>
                              </label>
                          </div>

                          <div class="sub-accordion-content">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                  piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                          </div>

                      </article>

                  </div>

              </main>

          </div>

      </div>

  )
}

export default Subject;