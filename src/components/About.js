export default function About(props) {
  return (
    <div className="container">
        <div id="about_head" className={`card text-bg-${props.mode} mb-3`} >
            <div className="card-header"><h2>About Us</h2></div>
            <div className="card-body">
                <h5 className="card-title">TextUtils: Your Essential Text Manipulation App</h5><br />
                {/* <p className="card-text">TextUtils: Your Essential Text Manipulation App</p> */}
                
                <p>TextUtils is a powerful and user-friendly app designed to simplify your text-related tasks. Whether you need to count words and characters, modify case, or perform basic text editing operations, TextUtils has got you covered.</p>
                
                <p>With TextUtils, you can effortlessly perform the following functions:</p>
                
                <ol>
                  <li>Word and Character Count: Get accurate word and character counts for any text you input. Simply paste or type in your text, and TextUtils will instantly display the count results, helping you keep track of your content length.</li>
                  
                  <li>Case Modification: Transform your text to uppercase or lowercase with a single click. Whether you need to convert an entire document or just a portion of text, TextUtils makes it a breeze.</li>
                  
                  <li>Copy Text: Quickly and conveniently copy your text to the clipboard. Whether you want to transfer it to another app or simply save it for later, TextUtils ensures that your text is readily accessible whenever you need it.</li>
                  
                  <li>Clear Text: Easily remove all the text from the input area with a single tap. Whether you want to start afresh or clear the content for a new text, TextUtils allows you to wipe the slate clean effortlessly.</li>
                  
                  <li>Remove Extra Spaces: Tidy up your text by eliminating unnecessary spaces between words. TextUtils smartly detects and removes excessive spaces, ensuring your text appears clean and professional.</li>
                </ol>
                
                <p>TextUtils is a must-have tool for writers, students, professionals, and anyone who frequently works with text. Its intuitive interface, lightning-fast processing, and diverse range of features make it an indispensable companion for all your text manipulation needs.</p>
                
                <p>Try TextUtils today and unlock a world of convenience and efficiency in managing your text effortlessly.</p>
            </div>
        </div>
    </div>
  )
}
