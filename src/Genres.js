import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Genres = () => {
    const [data, setData] = useState([])
    const deleteGenre = (id) => {
        axios.delete('api/genres/'+id)
        .then((res) => {
            setData(data.filter(item => item.id !== id))
        })
    }
    const renderLine = (record) => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteGenre(record.id)}>Remover</button>
                    <Link className='btn btn-warning' to={'/generos/'+record.id} style={{marginLeft: 5}}>Editar</Link>    
                </td>
            </tr>
        )
    }
    useEffect(() => {
        axios.get('/api/genres')
        .then((res) => {
            setData(res.data.data)
        })
    }, [])

    if(data.length === 0) {
        return (
            <div>
            <Link style={{margin: 5}} type='button' class='btn btn-primary' to='/generos/novo'>Novo Genêro</Link>
            <div class="alert alert-warning" role="alert">
                Você não possui genêros criados!
            </div>
            </div>
        )
    }

    return (
        <div>
        <h1>Genêro</h1>
        <Link style={{margin: 5}} type='button' class='btn btn-primary' to='/generos/novo'>Novo Genêro</Link>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderLine)}
            </tbody>
        </table>
        </div>
    )
}

export default Genres
