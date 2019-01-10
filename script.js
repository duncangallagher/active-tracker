var app = new Vue({
	el: '#app',
	data: function () {
		return {
			fitbitUserID: '59JXKD',
			// get token (1 year) here: https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228FD5&redirect_uri=http%3A%2F%2Flocalhost%3A8080&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=31536000    
			fitbitRequestOptions: {
				headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhGRDUiLCJzdWIiOiI1OUpYS0QiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTc4NDQ3MDAyLCJpYXQiOjE1NDY5MTEwMDJ9.qZyrY7f1lU9uuWEGqszfiJImEWY8i-0qS0ap-f_xBGw' }
			},
		}
	},
	methods: {
		getActivity: function () {
			fetch('https://api.fitbit.com/1/user/' + this.fitbitUserID + '/sleep/date/' + moment().format('YYYY-MM-DD') + '.json', this.fitbitRequestOptions)
				.then(response => {
					return response.json();
				}).then(data => {
					// Work with JSON data here
					console.log(data);
				}).catch(err => {
					// Do something for an error here
				});

		},
	},
	created() {
		let vm = this;
		this.getActivity();
	}
});
var chartComponent = app.$refs.chart;