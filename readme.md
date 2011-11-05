jquery.imagepreview.js - offline image previews

It's a jQuery library for adding a preview to image upload forms. It first tries to use the FileReader API, then falls back on updating the src of the image preview element to the local file.

If you do not pass a jQuery object corresponding to an IMG tag, it creates one for the input that sits right beside it in the DOM. Use it like so:

    $('input:file.preview').imagepreview();

Or

    $('input#preview_input').imagepreview('img#preview_output');

If you end up just letting the script tack an image element onto the dom, you'll probably want to do some work styling it, else it'll look goofy. There's no css or other stuff here to make the results pretty.

It's honestly pretty simple, so I don't expect much development out here unless I run into cases where I would want extra functionality.

License: MIT
------------

Copyright (C) 2011 by Alan Rager

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
