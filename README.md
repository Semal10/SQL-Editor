## Page Load Time

DOMContentLoad : 926ms
Page Load : 995ms

## Calculation of Page Load Time

I tested this using various processes.

1) Using Network tab in Chrome Dev Tool

So what i did is i checked the DOMContentLoad & Page Load Speed in Network by clicking Ctrl + R which automatic measures it for us. But there may be thin error in this process, so i tested it 5 more continuous times i stored the average time.

2) Using React Dev Tools in Lighthouse

There is a button in Lighthouse Tab which generates us the whole report regarding performance, SEO , accessibility, and reliabilty. I scored 94 in Performance, 96 in Accessibility & 100 in Best Practices & SEO. Also stored the page load speed in performance review.

Lasting i took the average of all the above methods , and stated it to be my final DOMContentLoad & Page Load time.

## Optimization

Used debounce function to avoid unnecessary re-renders and save the time.


