// BrowseSection.js
import React from 'react';
import './style.css'; // Import your CSS file here

function BrowseSection() {
  return (
    <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>
        <input className="searchbar" placeholder="Search by hotel name, place etc."/>
        <section className="grid hotel-cards">
            <article className="hotel-card">
                <div className="card-image">
                    <div className="card-labels">
                        <p className="chip">Florence</p>
                        <p className="chip">&#10084;</p>
                    </div>
                </div>
                <p className="text-middle">Harmony Hideaway Hotel</p>
                <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.</p>
                <div className="hotel-card-footer">
                    <p className="text-middle">★★★★★</p>
                    <p className="text-middle">100€/room</p>
                </div>
                <button className="button primary">View offer <img src="./Assets/Arrow.svg"></img></button>
            </article>
            <article className="hotel-card">
                <div className="card-image">
                    <div className="card-labels">
                        <p className="chip">Madrid</p>
                        <p className="chip">&#10084;</p>
                    </div>
                </div>
                <p className="text-middle">Serene Retreat</p>
                <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.</p>
                <div className="hotel-card-footer">
                    <p className="text-middle">★★★★★</p>
                    <p className="text-middle">70€/room</p>
                </div>
                <button className="button primary">View offer <img src="./Assets/Arrow.svg"></img></button>
            </article>
            <article className="hotel-card">
                <div className="card-image">
                    <div className="card-labels">
                        <p className="chip">Sintra</p>
                        <p className="chip">&#10084;</p>
                    </div>
                </div>
                <p className="text-middle">Palm Springs</p>
                <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.</p>
                <div className="hotel-card-footer">
                    <p className="text-middle">★★★★★</p>
                    <p className="text-middle">65€/room</p>
                </div>
                <button className="button primary">View offer <img src="./Assets/Arrow.svg"></img></button>
            </article>
            <article className="hotel-card">
                <div className="card-image">
                    <div className="card-labels">ś
                        <p className="chip">Sienna</p>
                        <p className="chip">&#10084;</p>
                    </div>
                </div>
                <p className="text-middle">Oasis Resort</p>
                <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.</p>
                <div className="hotel-card-footer">
                    <p className="text-middle">★★★★★</p>
                    <p className="text-middle">115€/room</p>
                </div>
                <button className="button primary">View offer <img src="./Assets/Arrow.svg"></img></button>
            </article>
        </section>
        <button className="button secondary">Find more <img src="./Assets/Arrow.svg"></img></button>
    </section>
  );
}

export default BrowseSection;
