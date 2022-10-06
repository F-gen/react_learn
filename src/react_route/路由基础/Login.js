import { useNavigate } from 'react-router-dom'


// 跳转到关于
function Login() {
  // 执行useNavigate 得到跳转函数
  const navigate = useNavigate()
  function goAbout() {
    navigate('/about/1001', { replace: true })
    // navigate('/about/?id=1001', { replace: true })
  }


  return (
    <>

      <div>login</div>
      <button onClick={goAbout}>to-about</button>
    </>
  )
}

export default Login
