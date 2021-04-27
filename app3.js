new Vue({
    el: '#app',

    created: function(){
                this.getSenate()
            },
        
        

        data(){
            return {

                imagen: "assets/fondoimg.gif",
                imagen1: "assets/lupa.jpg",
                imagen2: "assets/correo.jpg",
                titulo: "Attendance",
                titulo2: "Party Loyalty",
                titulo3: "Senator",
                parr1: "The Constitution specifies that a majority of members constitutes a quorum to do business in each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; thus, in most cases, debates continue even if a majority is not present.",
                parr2: "The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator stating 'aye' or 'no' when his or her name is announced. The House reserves roll-call votes for the most formal matters, as a roll-call of all 435 representatives takes quite some time; normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the Senate, the Vice President may (if present) cast the tiebreaking vote.",
                parr3: "First convened in 1789, the composition and powers of the Senate are established in Article One of the U.S. Constitution. Each state is represented by two senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive powers not granted to the House, including consenting to treaties as a precondition to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal judges, other federal executive officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as well as trial of federal officials impeached by the House.",
                
                lista: [
                    {Party: 'Democrats', Cant: '54', Prom: '702.9'},
                    {Party: 'Republicans', Cant: '46', Prom: '702.3'},
                    {Party: 'Independents', Cant: '2', Prom: '717'},
                    {Party: 'Total', Cant: '102', Prom: '0'},
                ],
                
                listSenate: [],
                todalis: [],
                listcomp: [],
                listcomp2: [],
                orden: [],
                orden2: [],
                diezporciento: 0,
                diezporciento2: 0,
                primeros: [],
                ultimos: [],
                primeros2: [],
                ultimos2: [],

            }
},

methods:{
        getSenate() {
                const headers = { "X-API-Key": "HqLRnEvOnclNt3hrEn3x7kLbvHFW0wSQB72Nlldp" };
                this.$http.get("https://api.propublica.org/congress/v1/116/senate/members.json", { headers })
                .then(function(response){
                    
                    if(response.status === 200) {
                    this.listSenate = response.data.results;
                
                    this.listSenate = response.data.results.map(p => {
                    console.log(p.members.length);

                    for(let x = 0; x < 102; x++){

                        this.todalis.push({
                            "name": p.members[x].first_name + " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "party": p.members[x].party,
                            "state": p.members[x].state,
                            "years": p.members[x].seniority,
                            "votes": p.members[x].votes_with_party_pct,
                        })

                        this.listcomp.push({
                            "name": p.members[x].first_name + " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "missed": p.members[x].missed_votes,
                            "missed2": p.members[x].missed_votes_pct,
                        })

                        this.listcomp2.push({
                            "name": p.members[x].first_name+ " "+ p.members[x].last_name,
                            "url": p.members[x].url,
                            "total": p.members[x].total_votes,
                            "porc": p.members[x].votes_with_party_pct,

                    });
                };

                
                    this.orden = this.listcomp.sort(function(a,b){
                        var x = (a.missed - b.missed);
                        return x;
                    
                        });

                    console.log(this.orden[0].name);

                    this.diezporciento = this.orden.length*0.1
                    console.log(this.diezporciento);

                    this.primeros = this.orden.slice(0,this.diezporciento)
                    console.log(this.primeros[0]);     
                    
                    this.ultimos = this.orden.slice(this.orden.length -10)
                    console.log(this.ultimos[0]);  
            
                    
                    this.orden2 = this.listcomp2.sort(function(a,b){
                        var y = (a.total - b.total);
                        return y;

                        });
                    
                    this.diezporciento2 = this.orden2.length*0.1
                    console.log(this.diezporciento2);

                    
                    this.primeros2 = this.orden2.slice(0,this.diezporciento2)
                    console.log(this.primeros2[0]);   

                    this.ultimos2 = this.orden2.slice(this.orden2.length -10)
                    console.log(this.ultimos2[0]);  

                    
                 
                });
                            
            }
        

        }).catch(error => {
            console.log(error)
    });
}
}
});

