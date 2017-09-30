# Swatch generator for laser etchers

Generates a series of paths at different feedrates / laser power, to check the effect of your CNC laser etcher on different materials.

![Example on plywood](swatch.jpg)

# Reference
 - Font (public domain): http://www.fontspace.com/micronus/y145m-2009
 - https://github.com/nodebox/opentype.js
 - http://linuxcnc.org/docs/html/gcode/m-code.html#mcode:m3-m4-m5
 - Bezier curves, approximation by biarcs
     - https://pomax.github.io/bezierinfo/#arcapproximation
     - http://fontforge.github.io/bezier.html
 - gcode parser/viewer https://github.com/joewalnes/gcode-viewer
