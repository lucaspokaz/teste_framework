import { useState } from "react"
import { Col, Container, InputGroup, Row } from "reactstrap"

import api from "../../services/api"

import './style.css'

const Divisores = () => {
    const [pesquisando, setPesquisando] = useState(false)
    const [data, setData] = useState([])

    const [texto, setTexto] = useState('')

    const handleChange = (event) => {
        setTexto(event.target.value)
    }

    const pesquisar = async () => {

        if (texto === '') {
            alert('Digite o número corretamente.')
            return null
        }

        setPesquisando(true)
        await api.get(`/divisores/${texto}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data)
                    setPesquisando(false)
                } else {
                    alert('Houve um erro ao executar a consulta.')
                    setPesquisando(false)
                }
            })
            .catch(error => {
                setPesquisando(false)
                alert('Houve um erro ao executar a consulta. ' + error.message)
            })
    }

    return (
        <Container className="container">

            <InputGroup>
                <input id='texto' type={'number'} className="w-50" placeholder="Digite um número e pesquise" value={texto} onChange={handleChange} disabled={pesquisando} />
                <button type="button" className="btn btn-primary" onClick={pesquisar} disabled={pesquisando}> {pesquisando ? 'Pesquisando...' : 'Pesquisar'} </button>
            </InputGroup>

            <hr />

            {data && data.divisores &&
                <>
                    <h3>Divisores</h3>
                    <Row>
                        {data.divisores && data.divisores.map((item, index) => {
                            return <Col xs={3} lg={1} className="bg-light border text-center" key={index}>{item}</Col>
                        })}
                    </Row>
                </>
            }

            {data && data.primos &&
                <>
                    <h3>Divisores que são números primos</h3>
                    <Row>
                        {data.primos && data.primos.map((item, index) => {
                            return <Col xs={3} lg={1} className="bg-light border text-center" key={index}>{item}</Col>
                        })}
                    </Row>
                </>
            }
        </Container>
    )
}

export default Divisores