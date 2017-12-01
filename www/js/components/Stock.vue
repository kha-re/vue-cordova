<template>
    <div class="stock">
        <div class="row">
            <div class="col-md-4">
                 <select v-model="selected" v-on:change="refresh()" class="form-control">
                  <option disabled value="">Please select one symbol</option>
                  <option v-for="smbl in symbols">{{smbl}}</option>
                </select>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-xs-12">
                        <form class="form-inline" action="/action_page.php">
                            <div class="form-group">
                                <input class="form-control" type="text"  v-model="symbolToAdd" placeholder="Symbol Add"/>
                            </div>
                            <button type="submit" @click.prevent="addSymbol()" class="btn btn-default">Add</button>
                        </form>
                    </div>
                </div>
            </div>
             <div class="col-md-4">
                <span v-for="smbl in symbols" class="btn badge">{{smbl}} <i class="fa fa-remove" v-on:click="removeSymbol(smbl)"></i></span>
            </div>
            
        </div>
        <div class="col-md-12">
            <div v-if="!stockData" class="row">
                <div class="alert alert-info"><i class="fa fa-spinner"></i> Loading... Please wait...</div>
            </div>
            <div v-else class="row">
                <h2>Details</h2>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4><strong>{{stockData.name}}</strong> <small class="pull-right">{{stockData.codeBSE}}</small></h4>
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped">
                            <tr>
                                <th>Symbol</td>
                                <td>{{stockData.codeBSE}}</td>
                            </tr>
                            <tr>
                                <th>Current</td>
                                <td>{{stockData.current}}</td>
                            </tr>
                            <tr>
                                <th>DMA 200 (BSE)</td>
                                <td>{{stockData.BSE200}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="panel-footer">
                        <div style="font-size:1.2em;text-align:center;" :class="{'red': stockData.change200 < 0,'green': stockData.change200 > 0 }">
                            Change (BSE): 
                            <i class="fa" :class="{'fa-arrow-down': stockData.change200 < 0,'fa-arrow-up': stockData.change200 > 0 }"></i>
                            {{ stockData.change200 }}%
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // Note: modifying `msg` below will not cause changes to occur with
                // hot-reload. As reloaded components preserve their initial state,
                // modifying these values will have no effect.
                message: "Hello",
                posts: [],
                stockData:null,
                errors: [],
                selected: '',
                symbolToAdd: null,
                symbols: JSON.parse(window.localStorage.getItem('symbols'))
            }
        }
    }
</script>

<style>

    .red{
        color:red;
    }
    .green{
        color:green;
    }

</style>