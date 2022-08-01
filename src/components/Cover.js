import React from 'react';
import mainLogo from'../images/1.png';

export default function Cover() {
  return (
    <div className='Cover d-flex h-100 text-center'>
        <div className="container">
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main class="px-3">
                    <h1>Want to get Placed</h1>
                    <p class="lead">This Website is one stop solution for anyone willing to upskill themselves and get placed.</p>
                    <p class="lead">Want to join the elite group bookmark this site.</p>
                    <p class="lead">
                        <a href="#" class="btn btn-lg btn-secondary fw-bold">Learn more</a>
                    </p>
                </main>
            </div>
        </div>
        <img src={mainLogo} className="mainlogo"/>
    </div>
  )
}
