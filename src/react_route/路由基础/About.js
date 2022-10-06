import { useSearchParams, useParams } from 'react-router-dom'

function About() {
  //params 为对象,用来获取对于参数，把参数名称作为get方法到的实参传来
  // const [params] = useSearchParams()
  // const id = params.get('id')
  const params = useParams()
  return (
    <>
      <div>About</div>
      id:{params.id}
    </>
  )
}

export default About
