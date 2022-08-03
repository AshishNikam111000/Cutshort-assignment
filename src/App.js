import { useEffect, useRef, useState } from 'react';
import Logo from './assest/Leaf.png'

import { IoIosPeople } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'

import './App.scss';

function App() {
  const [pageCount, setPageCount] = useState(1);
  const [GivenName, setName] = useState('');

  const One = useRef()
  const Two = useRef()
  const Three = useRef()
  const Four = useRef()
  const Bar = useRef()
  const Button = useRef()

  const work1 = useRef()
  const work2 = useRef()

  const BorderLess1 = useRef()
  const BorderLess2 = useRef()

  const WorkspaceInput = useRef()

  useEffect(() => {
    switch (pageCount) {
      case 2:
        WorkspaceInput.current.value = ''
        Two.current.style.background = '#664DE4';
        Two.current.style.border = '#664DE4';
        Two.current.style.color = '#FFFFFF';
        Bar.current.style.width = '30%';
        break;
      case 3:
        Three.current.style.background = '#664DE4';
        Three.current.style.border = '#664DE4';
        Three.current.style.color = '#FFFFFF';
        Bar.current.style.width = '52%';
        break;
      case 4:
        BorderLess1.current.style.border = 'none';
        BorderLess2.current.style.border = 'none';
        Four.current.style.background = '#664DE4';
        Four.current.style.border = '#664DE4';
        Four.current.style.color = '#FFFFFF';
        Bar.current.style.width = '60%';
        Button.current.innerText = 'Launch Eden';
        break;
      default:
        One.current.style.background = '#664DE4';
        One.current.style.border = '#664DE4';
        One.current.style.color = '#FFFFFF';
        Bar.current.style.width = '8%';
    }
  }, [pageCount])


  function IncrPageCount() {
    if (pageCount < 4) {
      setPageCount(pageCount + 1);
    }
  }

  function NameHandler(e) {
    setName(e.target.value);
  }

  function workspace(e) {
    if (e.target.id === '1') {
      work1.current.style.border = '1px solid #664DE4';
      work2.current.style.border = '1px solid gray';

      work1.current.children[0].style.fill = '#664DE4';
      work2.current.children[0].style.fill = 'rgb(112, 112, 112)';
    }
    else if (e.target.id === '2') {
      work1.current.style.border = '1px solid gray';
      work2.current.style.border = '1px solid #664DE4';

      work1.current.children[0].style.fill = 'rgb(112, 112, 112)';
      work2.current.children[0].style.fill = '#664DE4';
    }
  }

  return (
    <div className="App w-screen h-screen">
      <div className='Container'>
        <center>
          <div className='innerContainer flex flex-col gap-5'>

            <div className='flex justify-center items-center'>
              <img className='w-10' src={Logo} alt="Logo" />
              <div className='text-3xl tracking-tighter font-medium'>Eden</div>
            </div>

            <div className='ProgressContainer flex justify-evenly items-center'>
              <div ref={One} className='Progress'>1</div>
              <div ref={Two} className='Progress'>2</div>
              <div ref={Three} className='Progress'>3</div>
              <div ref={Four} className='Progress'>4</div>
              <div className='ProgressBar1'></div>
              <div ref={Bar} className='ProgressBar2'></div>
            </div>

            {
              pageCount === 1 ?
                <div className='flex flex-col gap-10'>
                  <div>
                    <div className='text-3xl'>Welcome! First things first...</div>
                    <div className='text-gray-500'>You can always change them later.</div>
                  </div>
                  <div>
                    <div className='text-left mb-1'>Full Name</div>
                    <input type="text" name="FName" id="fname" placeholder='Steve Jobs' />
                    <br /><br />
                    <div className='text-left mb-1'>Display Name</div>
                    <input type="text" name="DName" id="dname" placeholder='Steve' onChange={NameHandler} />
                  </div>
                </div>
                :
                pageCount === 2 ?
                  <div className='flex flex-col gap-5'>
                    <div>
                      <div className='text-3xl'>Let's set up a home for all your work</div>
                      <div className='text-gray-500'>You can always create another workspace later.</div>
                    </div>
                    <div>
                      <div className='text-left mb-1'>Workspace Name</div>
                      <input ref={WorkspaceInput} type="text" name="WName" id="wname" placeholder='Workspace Name' />
                      <br /><br />
                      <div className='text-left mb-1'>Workspace Url {'(Optional)'}</div>
                      <div className='flex items-center WURL'>
                        <div className='bg-slate-400 opacity-80 p-3 '>www.eden.com/</div>
                        <input type="text" name="UrlName" id="Urlname" placeholder='Example' />
                      </div>
                    </div>
                  </div>
                  :
                  pageCount === 3 ?
                    <div className='flex flex-col gap-5'>
                      <div>
                        <div className='text-3xl'>How are you planning to use Eden?</div>
                        <div className='text-gray-500'>We'll streamline your setup experience accordingly.</div>
                      </div>
                      <div className='flex text-left gap-4 md:gap-16'>
                        <div ref={work1} id='1' className='WorkSpaceOtion flex flex-col gap-2 p-5 pr-1 cursor-pointer rounded-md' onClick={(e) => workspace(e)}>
                          <BsFillPersonFill className='WorkspaceIcon w-8 h-10' />
                          <div className='font-semibold text-xl'>For Myself</div>
                          <div className='text-sm md:w-2/3'>Write better. Think more clearly. Stay organized.</div>
                        </div>
                        <div ref={work2} id='2' className='WorkSpaceOtion flex flex-col gap-2 p-5 pr-1 cursor-pointer rounded-md' onClick={(e) => workspace(e)}>
                          <IoIosPeople className='WorkspaceIcon w-8 h-10' />
                          <div className='font-semibold text-xl'>With my team</div>
                          <div className='text-sm md:w-2/3'>Wikis, docs, tasks {'&'} projects, all in one place.</div>
                        </div>
                      </div>
                    </div>
                    :
                    <div className='flex flex-col gap-5'>
                      <center>
                        <AiFillCheckCircle className='w-16 h-16' fill='#664DE4' />
                      </center>
                      <div>
                        <div ref={BorderLess1} className='text-3xl'>Congratualitons, {GivenName} </div>
                        <div ref={BorderLess2} className='text-gray-500'>You have completed onboarding, you can start using the Eden!.</div>
                      </div>
                    </div>
            }

            <button ref={Button} className='p-2 bg-indigo-500 rounded-lg w-full text-white' onClick={IncrPageCount}>Create Workspace</button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
