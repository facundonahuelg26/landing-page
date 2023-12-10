const Form = () => {
  return (
    <div className='w-full flex justify-center'>
      <form className='form'>
        <div>
          <div className='py-2'>
            <label htmlFor='name' className='labels'>
              Nombre
            </label>
          </div>
          <input
            id='name'
            type='text'
            name='name'
            className='h-10 block inputs rounded-3xl'
          />
        </div>
        <div className='mt-4'>
          <div className='py-2'>
            <label htmlFor='email' className='labels'>
              Correo electrónico
            </label>
          </div>
          <input
            id='email'
            type='email'
            name='email'
            className='h-10 block inputs rounded-3xl'
          />
        </div>
        <div className='mt-4'>
          <div className='py-2'>
            <label htmlFor='message' className='labels'>
              Escribe un mensaje
            </label>
          </div>
          <textarea
            id='message'
            rows={6}
            className='block inputs pt-2 rounded-xl resize-none'
            name='message'
          />
        </div>
        <div className='mt-8'>
          <button className='btn w-full'>Enviar mensaje</button>
        </div>
      </form>
    </div>
  )
}

export default Form
