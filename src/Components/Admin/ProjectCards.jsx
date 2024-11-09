

const ProjectCards = ({project}) => {
  return (
    <div className="p-[3vh] overflow-hidden text-clip w-full h-[25vh] hover:scale-[1.02] duration-300 hover:bg-zinc-900  bg-black border-b-[1px] border-zinc-400 flex flex-col justify-center">
        <p className="text-zinc-300">id : {project.id}</p>
        <p className="text-zinc-300">title : {project.title}</p>
        <p className="text-zinc-300">description : {project.description}</p>
        <p className="text-zinc-300">videoLink : {project.video}</p>
        <p className="text-zinc-300">siteLink : {project.siteLink}</p>
      
    </div>
  )
}

export default ProjectCards
