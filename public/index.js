

// const svg = d3.select('svg');

// const projection = d3.geoNaturalEarth1();
// const pathGenerator = d3.geoPath().projection(projection);

// svg.append('path')
//     .attr('class', 'sphere')
//     .attr('d', pathGenerator({ type: 'Sphere' }));

// d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
//     .then(data => {
//         const countries = topojson.feature(data, data.objects.countries);
//         svg.selectAll('path').data(countries.features)
//             .enter().append('path')
//             .attr('class', 'country')
//             .attr('d', pathGenerator);
//     });
//{country:data.country,intensity:data.intensity}
var Topics = [];

fetch('/data.json')
    .then(data => (data.json()
        .then(md => {

            const mydata = JSON.parse(JSON.stringify(md))
            var topic = []
            for (i = 0; i < 1000; i++) {
                topic.push(mydata[i].topic)

            }
var Likehlihood=[]
for (i = 0; i < 1000; i++) {
  Likehlihood.push(mydata[i].likelihood)

}
console.log(Likehlihood)
            uniqueTopics = Array.from(new Set(topic))

            for (i = 0; i < 100; i++) {
                for (j = 0; j < 1000; j++) {
                    if (mydata[i].topic === uniqueTopics[j]) {
                        Topics.push({ "id": uniqueTopics[i], "name": mydata[i].country, "population": mydata[i].intensity })
                        break;
                    }
                }
            }
            //  console.log(Topics);
            var country = [];
            for (i = 0; i < Topics.length; i++) {
                country.push(Topics[i].name)
            }
            uniquecountry = Array.from(new Set(country))


            var intensity = [];
            for (i = 0; i < Topics.length; i++) {
                intensity.push(Topics[i].population)
            }
            uniqueintensity = Array.from(new Set(intensity))
            console.log(uniquecountry);
            new Chart(document.getElementById("polar-chart"), {
                type:  'polarArea',
                data: {
                  labels: ["United States of America", "Mexico", "Nigeria", "Lebanon", "Russia", "Saudi Arabia", "Angola", "Egypt", "South Africa", "India", "Ukraine", "Azerbaijan", "China", "Colombia", "Niger", "Libya", "Brazil", "Mali", "Indonesia", "Iraq", "Iran"],
                  datasets: [{
                    label: "Intensity",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: [6, 60, 16, 4, 12, 9, 8, 24, 72, 18, 20,60, 16, 4, 12,24, 72, 18, 20,1,13]
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Intensity vs Country'
                  }
                }
            });

           

        }
        )
    )
    )




    new Chart(document.getElementById("doughnut-chart"), {
      type: 'doughnut',
      data: {
        labels: ["United States of America", "Mexico", "Nigeria", "Lebanon", "Russia", "Saudi Arabia", "Angola", "Egypt", "South Africa", "India", "Ukraine", "Azerbaijan", "China", "Colombia", "Niger", "Libya", "Brazil", "Mali", "Indonesia", "Iraq", "Iran"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data:[ 3, 3, 3, 2, 3, 3, 4, 4, 4, 3, 2, 3, 2, 2, 4, 4, 3, 4, 2, 2, 4, 4]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Likehlihood vs Country'
        }
      }
  });