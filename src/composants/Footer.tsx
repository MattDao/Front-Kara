import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
export const Footer = () => {
    return (
        <div>
          <footer className="bg-light text-center text-white" >
            <div className="container p-4 pb-0">
              <section className="mb-4">
                <div className="row">
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-google"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="btn btn-floating m-1" href="#!" role="button">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
              &copy; 2023 Matthieu daoulas
            </div>
          </footer>
        </div>
      );
      

};

