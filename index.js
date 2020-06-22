const { spawn } = require('child_process')





 //Create a pallet png for each frame for optimal color
var filter2="fps=15,scale=1260:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse=new=1";
var ff2=['-ss', '0.01', '-t', '6.0', '-i', 'moviefile-name.mp4', '-vf', filter2 ,'-loop','0', 'moviefile-name.gif']

 /*
 //or create a singel pallet png first to use on each frame and the conver the movie to gif
//var pallet=['-y', '-i', 'sommercasino.mov', '-vf', 'palettegen', 'palette.png']
//var ff3=['-y','-i', 'file.mp4', '-i', 'palette.png', '-filter_complex', 'paletteuse', '-r', '10', '-s', '1260x420', 'file.gif']
*/


var ffmpeg = spawn('ffmpeg', ff2);
            // input_file.pipe(ffmpeg.stdin);
            // ffmpeg.stdout.pipe(output_stream);

            ffmpeg.stderr.on('data', function (data) {
                console.log(data.toString());
            });

            ffmpeg.stderr.on('end', function () {
                console.log('file has been converted succesfully');
            });

            ffmpeg.stderr.on('exit', function () {
                console.log('child process exited');
            });

            ffmpeg.stderr.on('close', function() {
                console.log('...closing time! bye');
            });
