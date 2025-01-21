import React from "react";

const AboutMe = () => {
    return (
        <div className="about-me" style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
            <header className="about-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '2.5em', margin: '0', color: '#333' }}>Nolan Grossi</h1>
                <img 
                    src="https://avatars.githubusercontent.com/u/97293503?s=400&u=b29af97ae17d0e2e9949ba065e9a24b13e56f63a&v=4" 
                    alt="Nolan Grossi" 
                    className="profile-picture"
                    style={{ borderRadius: '50%', width: '150px', height: '150px', marginTop: '15px' }}
                />
            </header>
            <section className="about-content" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', color: '#555' }}>
                <div className="about-text">
                    <p>
                        Hi, I'm <strong>Nolan Grossi</strong>, a passionate programmer from Detroit, Mi.
                        I have a deep interest in programming and am always willing for a chance to learn more.
                    </p>
                    <p>
                        I enjoy creating efficient and helpful programs at any chance I get. 
                        In my free time, I love making games, playing games, creating scripts and software to make life easier.
                    </p>
                    <p>
                        Feel free to connect with me via my contact page! My email is <strong>nolangrossi6@gmail.com</strong>. 
                        I look forward to collaborating and sharing ideas!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
