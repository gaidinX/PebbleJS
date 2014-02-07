simply.title("hey!");

simply.on('singleClick', function(e) {
  simply.subtitle('Beep ' + e.button + ' button!');
});

simply.on('longClick', function(e) {
  simply.subtitle('Beeeeeeeeeeeeeeeeeeeep ' + e.button + ' button!');
});
