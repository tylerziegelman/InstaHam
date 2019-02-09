import { Selector } from 'testcafe';


fixture('Node Cards')
  .page('http://localhost:3000/home');

test('All Cards', async (t) => {
  
  const card = Selector('div.ant-card')
  const title = Selector('h1');
  const tableRows = Selector('tbody > tr');
  const addJobButton = Selector('a.btn.btn-primary');
  const firstJob = Selector('tbody > tr').withText('Horse Whisperer');
  // check title, add job button, table rows, and job exists
  await t
    // .expect(title.innerText).eql('All Jobs')
    // .expect(addJobButton.innerText).eql('Add New Job')
    // .expect(tableRows.count).eql(3)
    .expect(card.exists).ok();
});

//register
  //check for homepage render
  //check for username in navbar
//login
  //check for homepage render
  //check for username in navbar
//GeneratePost
  //check for display of card data
  //check for successful post
//GenerateLikes
  //check for likes display

//CheckForPosts
  //check for posts from other users
  //check for posts from self
  //check for card elements on the page 


  //to run tests cd into test folder and run testcafe <browser> <filename.js>