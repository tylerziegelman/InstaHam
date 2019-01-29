import { Selector } from 'testcafe';

fixture('Node Jobs')
  .page('http://localhost:3000');

test('All Cards', async (t) => {
  const title = Selector('h1');
 
  // check title, add job button, table rows, and job exists
  await t
    .expect(title.innerText).eql('All Jobs')
    .expect(addJobButton.innerText).eql('Add New Job')
    .expect(tableRows.count).eql(3)
    .expect(firstJob.exists).ok();
});