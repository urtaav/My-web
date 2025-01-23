import PNT from '../assets/pnt_home.png'
import Buscador_genero from '../assets/buscador_genero_home.png'
import Buscadores_tematicos from '../assets/buscadores_tematicos.png'
import Fixture from '../assets/fixture.png'
import Defer from '../assets/defer.png'
import Card from './Card'

const Projects = () => {
    const projectJson = [
        {
          title: 'Plataforma Nacional de transparencia',
          desc: `Funciona como un mediador tecnológico para garantizar la transparencia de lo público y los ejercicios del derecho a la información y de la protección de los datos personales`,
          image: PNT,
          live: "https://www.plataformadetransparencia.org.mx/Inicio",
          github: "#",
          showGit:false,
        },
        {
          title: 'Buscador de Género',
          desc: 'El buscador de género del INAI es una herramienta que permite encontrar información relacionada con temas de género en la Plataforma Nacional de Transparencia (PNT). ',
          image: Buscador_genero,
          live: "https://buscadorgenero.plataformadetransparencia.org.mx/",
          github: "#",
          showGit:false,
        },
        {
          title: 'Buscadores Temáticos',
          desc: 'Los buscadores temáticos del INAI son herramientas que permiten a la ciudadanía acceder a información pública..',
          image: Buscadores_tematicos,
          live: "https://tematicos.plataformadetransparencia.org.mx/tematico/directorio",
          github: "#",
          showGit:false,
        },
        {
          title: 'Fixture Soccer App',
          desc: 'This Football Fixture app automatically generates matchups between a specified number of teams. ',
          image: Fixture,
          live: "https://urtaav.github.io/fixture-soccer-app-17/",
          github: "https://github.com/urtaav/fixture-soccer-app-17",
          showGit:true,
        },
        {
          title: 'Defer Tabs',
          desc: 'The app highlights how the new directives simplify common tasks like conditionally rendering elements, handling user interactions, and managing component behavior.',
          image: Defer,
          live: "https://private-user-images.githubusercontent.com/30246385/290899830-4caaa921-db91-438a-b941-76a4a561fe8a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NzE5NzQsIm5iZiI6MTczNzY3MTY3NCwicGF0aCI6Ii8zMDI0NjM4NS8yOTA4OTk4MzAtNGNhYWE5MjEtZGI5MS00MzhhLWI5NDEtNzZhNGE1NjFmZThhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIzVDIyMzQzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1MjEwNmUwMWY0MjM4N2IzYWMzODczYWFkN2M1OWM1MmI1MTY3MTZiZTU2ZGNlZGFmM2U4NTRkZTQ1OTEzYWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.LYaligESHsNFmM05Dyl8fSGd8baqDI7k3rO2IEcBblU",
          github: "https://github.com/urtaav/angular-defer-material-tabs",
          showGit:true,
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
    <div className='mb-16 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-white border-b border-cyan-500 w-max pb-4'>My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((item)=> {
              return <Card item={item} key={item.title}/>
          })}
      </div>
    </div>
  </section>
  )
}

export default Projects