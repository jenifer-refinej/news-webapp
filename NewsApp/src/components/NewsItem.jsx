function NewsItem({ title, description, url, src }) {
    // Safeguard to avoid errors when slicing
    let heading = title ? title.slice(0, 50) : "No Title";
    let para = description ? description.slice(0,90) : "The sun dipped below the horizon, casting a warm golden glow across the landscape. A gentle breeze stirred e"

    return (
      
        // <div className="card bg-dark d-inline-block mb-3 text-white my-3 mx-3 py-2 px-2" >
        //     <img src= {src !== 'N/A' ? src : 'https://via.placeholder.com/280*180'} alt = {src} className="card-image" />
           
        //         <h5 className="card-title">{heading}..</h5>
        //         <p className="card-text">{para}....</p>
        //         <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
            
        // </div>
       
  <div className="card bg-dark  mb-3 text-white my-3 mx-3 py-2 px-2">
              <img src= {src !== 'N/A' ? src : 'https://via.placeholder.com/280*180'} alt = {src} className="card-image" />
              
              <h5 className="card-title fs-5">{heading}..</h5>
                <p className="card-text">{para}....</p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
        
      
    
    );
}

export default NewsItem;
