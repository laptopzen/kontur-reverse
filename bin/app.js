jQuery(function(){
	$('.form-control').keyup(function(){

		// deklarasi

		favorable = $('#favorable').val();
		unfavorable = $('#unfavorable').val();
		opsi = $('#opsi').val();
		data = $('#data').val();
		hasil = $('#hasil');

		// mulai

		favorable = favorable.replace(/\n\n/g, ',').replace(/\n/g, ',').replace(/ /g, '');
		favorable = favorable.split(',');
		for (n in favorable){
			favorable[n]--;
		}

		unfavorable = unfavorable.replace(/\n\n/g, ',').replace(/\n/g, ',').replace(/ /g, '');
		unfavorable = unfavorable.split(',');
		for (n in unfavorable){
			unfavorable[n]--;
		}

		blueprint = [];
		for (n in favorable){
			blueprint[favorable[n]] = 'fav';
		}
		for (n in unfavorable){
			blueprint[unfavorable[n]] = 'unfav';
		}

		data = data.split('\n');
		for (n in data){
			data[n] = data[n].split('\t');
		}


		opsi = opsi.split('\n');

		skoring = [];

		for (a in data){
			for (n in blueprint){
				if (opsi.length == 4){
					if (blueprint[n] == 'fav'){
						if (data[a][n] == opsi[0]){
							skoring.push('Sangat Tidak Setuju');
						} else if (data[a][n] == opsi[1]){
							skoring.push('Tidak Setuju');
						} else if (data[a][n] == opsi[2]){
							skoring.push('Setuju');
						} else if (data[a][n] == opsi[3]){
							skoring.push('Sangat Setuju');
						}
					} else if (blueprint[n] == 'unfav'){
						if (data[a][n] == opsi[0]){
							skoring.push('Sangat Setuju');
						} else if (data[a][n] == opsi[1]){
							skoring.push('Setuju');
						} else if (data[a][n] == opsi[2]){
							skoring.push('Tidak Setuju');
						} else if (data[a][n] == opsi[3]){
							skoring.push('Sangat Tidak Setuju');
						}
					}
				} else if (opsi.length == 5){
					if (blueprint[n] == 'fav'){
						if (data[a][n] == opsi[0]){
							skoring.push('Sangat Tidak Setuju');
						} else if (data[a][n] == opsi[1]){
							skoring.push('Tidak Setuju');
						} else if (data[a][n] == opsi[2]){
							skoring.push('Netral');
						} else if (data[a][n] == opsi[3]){
							skoring.push('Setuju');
						} else if (data[a][n] == opsi[4]){
							skoring.push('Sangat Setuju');
						}
					} else if (blueprint[n] == 'unfav'){
						if (data[a][n] == opsi[0]){
							skoring.push('Sangat Setuju');
						} else if (data[a][n] == opsi[1]){
							skoring.push('Setuju');
						} else if (data[a][n] == opsi[2]){
							skoring.push('Netral');
						} else if (data[a][n] == opsi[3]){
							skoring.push('Tidak Setuju');
						} else if (data[a][n] == opsi[4]){
							skoring.push('Sangat Tidak Setuju');
						}
					}
				}
			}
		}

		// to matrix: skoring

		function listToMatrix(list, elementsPerSubArray) {
		    var matrix = [], i, k;

		    for (i = 0, k = -1; i < list.length; i++) {
		        if (i % elementsPerSubArray === 0) {
		            k++;
		            matrix[k] = [];
		        }

		        matrix[k].push(list[i]);
		    }

		    return matrix;
		}
		skoring = listToMatrix(skoring, blueprint.length);

		calon_hasil = '';
		for (n in data){
			for (a in blueprint){
				calon_hasil += skoring[n][a];
				calon_hasil += '\t';
			}
			calon_hasil += '\n';
		}
		hasil.val(calon_hasil);

	});
});