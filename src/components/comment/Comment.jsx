import { Button } from '@material-tailwind/react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext';

function Comment({ addComment, commentText, setcommentText, allComment, fullName, setFullName }) {
  const context = useContext(myContext);
  const { mode } = context;

  console.log(allComment)
  return (
    <section className=" py-8 lg:py-16" style={{paddingTop:'2rem', paddingBottom:'2rem', marginTop:'10rem'}}>
      <div className="max-w-2xl mx-auto px-4" style={{maxWidth:'42rem', marginLeft:'auto', marginRight:'auto', paddingLeft:'1rem', paddingRight:'1rem'}}>
        <div className="flex justify-between items-center mb-3" style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.75rem'}}>
          <h2 className="text-lg lg:text-2xl font-bold" style={{ color: mode === 'dark' ? 'white' : 'black', fontSize:'18px', lineHeight:'28px', fontWeight:'700'}}>
            Make Comment
          </h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-6" style={{marginBottom:'1.5rem'}}>
          {/* Full Name Input  */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
            shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
            style={{
              background: mode === 'dark'
                ? '#353b48'
                : 'rgb(226, 232, 240)',
                paddingTop:'0.5rem', paddingBottom:'0.5rem', paddingLeft:'1rem', paddingRight:'1rem', borderRadius:'0.5rem', borderTopLeftRadius:'0.5rem', borderTopRightRadius:'0.5rem', borderWidth:'1px', borderColor:'rgb(229 231 235 / var(1))'
            }}>
            <input
              type='text'
              placeholder='Enter Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 "
              style={{
                background: mode === 'dark'
                  ? '#353b48'
                  : 'rgb(226, 232, 240)',
                  paddingLeft:'0px', paddingRight:'0px', width:'100%', fontSize:'14px', lineHeight:'20px', borderWidth:'0px'
              }}
            />
          </div>

          {/* Text Area  */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
          shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200 "
            style={{
              background: mode === 'dark'
                ? '#353b48'
                : 'rgb(226, 232, 240)',
                paddingTop:'0.5rem', paddingBottom:'0.5rem', paddingLeft:'1rem', paddingRight:'1rem', borderRadius:'0.5rem', borderTopLeftRadius:'0.5rem', borderTopRightRadius:'0.5rem', borderWidth:'1px', borderColor:'rgb(229 231 235 / var(1))'
            }}
          >
            <label htmlFor="comment" className="sr-only" style={{position:'absolute', width:'1px', height:'1px', padding:'0', margin:'-1px', overflow:'hidden', clip:'rect(0, 0, 0, 0)', whiteSpace:'nowrap', borderWidth:'0'}}>Your comment</label>
            <textarea 
            id="comment" 
            rows={6} 
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)}
            className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 " style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)', paddingLeft:'0px', paddingRight:'0px', width:'100%', fontSize:'14px', lineHeight:'20px', borderWidth:'0px'}} placeholder="Write a comment..." required defaultValue={""} />
          </div>
          {/* Button  */}
          <div className="">
          <Button onClick={addComment} style={{
              background: mode === 'dark'
                ? 'rgb(226, 232, 240)'
                : 'rgb(30, 41, 59)',
              color: mode === 'dark'
                ? 'rgb(30, 41, 59)'
                : 'rgb(226, 232, 240)'
            }}
            >
              Post comment
            </Button>
          </div>
        </form>

        {/* Bottom Item  */}
        <article className="p-6 mb-6 text-base rounded-lg " style={{ background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)', padding:'24px', marginBottom:'24px', fontSize:'16px', lineHeight:'24px', borderRadius:'8px'}}>
        {allComment.map((item,index)=>{
            console.log(item)
            const {fullName,date, commentText} = item
            return(
              <>
          <footer className="flex justify-between items-center mb-" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className="flex items-center my-2 bg-white px-2 py-1 rounded-lg " style={{display:'flex', alignItems:'center', marginTop:'8px', marginBottom:'8px', backgroundColor:'white', paddingLeft:'8px', paddingRight:'8px', paddingTop:'4px', paddingBottom:'4px', borderRadius:'8px'}}>
              <p className="inline-flex items-center mr-3 text-lg  " style={{ color: mode === 'dark' ? 'black' : 'black', display:'inline-flex', alignItems:'center', marginRight:'12px', fontSize:'18px', lineHeight:'28px'}}
              >
                {fullName}
              </p>
              <p className="text-sm " style={{ color: mode === 'dark' ? 'black' : 'black', fontSize:'14px', lineHeight:'20px'}}
              >
                {date}
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400 text-md" style={{ color: mode === 'dark' ? 'white' : 'black' }}>↳ {commentText}</p>
          </>
            )
          })}
        </article>

      </div>
    </section>
  )
}

export default Comment