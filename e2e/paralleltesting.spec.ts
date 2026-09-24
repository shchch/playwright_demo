import { test, expect } from '@playwright/test';

test.describe('group', () => {

    // test('Test1', async ({ page }) => {
    //     console.log('this is Test1');
    // });

    // test('Test2', async ({ page }) => {
    //     console.log('this is Test2');
    // });

    // test('Test3', async ({ page }) => {
    //     console.log('this is Test3');
    // });
    
    // test('Test4', async ({ page }) => {
    //     console.log('this is Test4');
    // });     

    // test('Test5', async ({ page }) => {
    //     console.log('this is Test5');
    // }); 

    test('Test1', ({ page }) => {
    console.log('this is Test1');
    page.goto('https://example.com');
   

});

test('Test2', ({ page }) => {
    console.log('this is Test2');
});

test('Test3', ({ page }) => {
    console.log('this is Test3');
});

test('Test4', ({ page }) => {
    console.log('this is Test4');
});     

test('Test5', ({ page }) => {
    console.log('this is Test5');
});


});
