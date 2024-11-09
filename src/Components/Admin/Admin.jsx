import axios from "axios"
import { useEffect, useRef, useState } from "react"
import ProjectCards from "./ProjectCards";

const Admin = () => {

    const [projects,setprojects] = useState([]);

    useEffect(()=>{
        getprojects();
    },[]);

    const getprojects = () =>{
        axios.get('http://localhost/api/admin/').then((response)=>{
            setprojects(response.data);
        });
    };

    const [inputs,setinputs] =  useState({});

    const handleChange = (e)=>{
        setinputs((values)=>{
            return {...values, [e.target.name]: e.target.value }
        });
    };

   const register1 =  useRef(null);
   const register2 =  useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const method = register2.current.value;
        const id= register1.current.value;
        console.log(method);
        console.log(id);

        if(method === 'post'){
            axios.post(`http://localhost/api/admin/${id}`, inputs).then((response)=>{
                console.log(response);
                getprojects();
            });
        }

        else if(method === 'put'){
            axios.put(`http://localhost/api/admin/${id}`, inputs).then((response)=>{
                console.log(response.data);
                getprojects();
            });
        }

        else if(method === 'delete'){
            axios.delete(`http://localhost/api/admin/${id}`).then((response)=>{
                console.log(response);
                getprojects();
            });
        }



        // axios.post('http://localhost/api/admin/save', inputs).then((response)=>{console.log(response)});
    };

  return (
    <div className="bg-zinc-950 h-screen w-screen text-white flex">
        <div className="w-[50%] h-full flex justify-center items-center bg-black border-r-[1px] border-zinc-400">
        <form onSubmit={handleSubmit}  className="flex flex-col gap-[5vh] justify-center">
            
            <label htmlFor="">
                Project ID:
                <br/>
                <input className="rounded bg-zinc-800" ref={register1} type="number" name="id" placeholder="Optional"/>
            </label>
            <label htmlFor="title">
                Project Title:
                <br/>
                <input className="rounded bg-zinc-800" onChange={handleChange} name="title" type="text" placeholder="Title" />
            </label>

            <label htmlFor="description">
                Project Description:
                <br/>
                <textarea className="rounded bg-zinc-800" onChange={handleChange} name="description" placeholder="Content" />
            </label>

            <label htmlFor="video">
                Video Link:
                <br/>
                <input className="rounded bg-zinc-800" onChange={handleChange} type="text" name="video" placeholder="Link" />
            </label>

            <label htmlFor="siteLink">
                Site Link:
                <br/>
                <input className="rounded bg-zinc-800" onChange={handleChange} name="siteLink" type="text" placeholder="Link" />
            </label>

            <select ref={register2} className="rounded bg-zinc-800" name="method" id="">
            <option  value="" disabled selected>Select</option>
                <option value="post">Add Project</option>
                <option value="delete">Delete Project</option>
                <option value="put">Edit Project</option>
            </select>

            <button className="bg-blue-600 w-[3vw] h-[3vh] rounded text-sm">Save</button>
        </form>
        </div>


        <div className="w-[50%] h-full relative bg-black flex flex-col justify-center items-center">
            <h1 className="absolute top-[8%] left-[45%] text-2xl font-light">Projects</h1>
            <div className="w-full h-[60vh] bg-black overflow-auto">
                {projects.map(project =>(<ProjectCards project={project}/>))}
            </div>



        </div>
    </div>
  )
}

export default Admin
