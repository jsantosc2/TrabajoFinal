import React, { FC, useState } from "react"

import { gql, useQuery, useMutation } from "@apollo/client"

const register = gql`
      mutation register($name:String,$password:String){

         register(name:$name,password:$password)

}
`







const Buscador: FC = () => {
  const [registrarte, setRegistrarte] = useState<any>({
    name:"",
    password:""
  });
  const [mostrar, setmostrar] = useState<boolean>(false)
  const [mostrar2, setmostrar2] = useState<boolean>(false)

  const [createLink] = useMutation(register,{variables:{name:registrarte.name,password:registrarte.password}})

  async function f(){
    const d=await createLink()
    if(d.data.register===true){
      setmostrar(true)
      setmostrar2(false)
    }else{
      setmostrar2(true)
      setmostrar(false)

    }

  }
  return (
    <div>
      <input type="text" onChange={(e) => { setRegistrarte({...registrarte,name:e.target.value}) }} /><br />
      <input type="password" onChange={(e) => { setRegistrarte({...registrarte,password:e.target.value}) }} /><br />
      <button onClick={(e)=>{f()}}>Registrarte</button>
      {mostrar && <div>te has registrado</div>}
      {mostrar2 && <div>Ya existe</div>}

    </div>
  )
}

export default Buscador