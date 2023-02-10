import { useState } from 'react';
import github from '../../assets/images/github.svg';
import portrait from '../../assets/images/portrait-150-200.jpg';

function About() {
  const [isHover, setIsHover] = useState(false);
  const styles = {
    githubImage: {
      width: '60px',
      height: '70px',
      opacity: isHover ? 1 : 0.5,
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  const handleEvent = ({ type }) =>
    type === 'mouseenter' ? setIsHover(true) : setIsHover(false);

  return (
    <section className="bg-gray p-5" id="about">
      <article style={styles.title}>
        <h1>About me</h1>
        <a
          href="https://github.com/NicolasFlamel/"
          target="_blank"
          onMouseEnter={handleEvent}
          onMouseLeave={handleEvent}
        >
          <img
            src={github}
            alt="github profile link"
            style={styles.githubImage}
          />
        </a>
      </article>
      <img src={portrait} style={{ float: 'left', marginRight: '10px' }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
        delectus quia perferendis inventore, illum optio perspiciatis. Esse
        deleniti ducimus, corrupti minima similique dolor illo deserunt
        consequatur sit placeat itaque reiciendis error, unde id quisquam,
        impedit saepe? Fuga deleniti, at facilis nihil porro expedita incidunt
        ad est quasi ut suscipit commodi quidem animi hic? Dolores reprehenderit
        animi vel, tempora expedita eaque aspernatur itaque neque. Inventore
        provident, ipsam corporis et voluptatum dolorum minima deserunt sed ea
        ullam voluptatibus nam vel, laudantium dolor vero omnis at distinctio
        officia hic laborum harum nemo? Debitis culpa suscipit quis similique
        eaque earum ex facere ducimus quam at amet, voluptate eum.
        Necessitatibus itaque autem provident numquam sapiente! Similique
        blanditiis ipsum tenetur non quia dolorem aut eligendi, eveniet quisquam
        laudantium ab delectus autem aliquid asperiores earum culpa quibusdam
        fuga a esse at sapiente nobis reiciendis sunt ratione. Ab suscipit
        consequuntur labore? Perspiciatis corrupti asperiores laudantium, alias
        velit deleniti molestias eos fugiat expedita officia sapiente temporibus
        cum? Ab at, quas reprehenderit, temporibus suscipit, repudiandae a vero
        id sed minima ex magnam tenetur error exercitationem quis explicabo
        labore alias repellat ut optio. Animi debitis, ea fugit aliquam rem
        nostrum magnam nesciunt ad quidem est officia aliquid adipisci
        aspernatur harum doloribus sit consequatur possimus excepturi
        consequuntur ipsam fugiat veniam necessitatibus quis maxime? Corrupti ad
        quod voluptas sunt nisi vitae non eos voluptatum ipsam, dignissimos
        dolore laudantium asperiores illo sint rerum et temporibus eaque cum a
        incidunt cumque officia voluptatibus. Doloremque consectetur sunt
        expedita itaque. Illo fugit nisi pariatur et consequatur, quibusdam
        beatae quisquam vel facere dolore omnis blanditiis? Tenetur nulla esse
        recusandae optio temporibus dolorem incidunt dolores eveniet magnam
        veniam sunt error quam voluptatibus expedita magni maxime, cupiditate
        perspiciatis quo? In beatae unde vitae nobis earum magnam minus rem est
        laborum dolore tenetur atque nemo reprehenderit, voluptates dicta soluta
        velit!
      </p>
    </section>
  );
}

export default About;
