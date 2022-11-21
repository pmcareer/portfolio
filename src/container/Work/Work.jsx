import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import { urlFor, client} from '../../client';
import './Work.scss';


const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0})
  const [workData, setWorkData] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [workTags, setWorkTags] = useState([])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y:100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y:100, opacity: 1}])
      
      if(item === 'All'){
        setFilterWork(workData);
      }else{
        setFilterWork(workData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }
  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query)
    .then((data) => {
      setWorkData(data)
      setWorkTags(['UI/UX', 'Laravel', 'Web App', 'Mobile App', 'React JS', 'All'])
      setFilterWork(data)
      console.log("works data")
      console.log(data)
    })
  }, [])
  

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className='app__work-filter'>
        {workTags.map((item,index)=>(
          <div
           key={index}
           onClick={() => handleWorkFilter(item)}
           className={`app__work-filter-item app__flex p-text 
           ${activeFilter === item ? 'item-active' : "" }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">
                  {/* {work.tags[0]} */}
                  {work.tags.map((row,index) => (
                    <span key={index}> {row} 
                     <span style={{ color: "var(--secondary-color)" }}> | </span> 
                    </span> 
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>


    </>
  )
}

export default AppWrap(Work, 'work')