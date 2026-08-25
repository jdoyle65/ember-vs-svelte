export const session = $state({
	currentUser: null as { name: string } | null,

	login(user: { name: string }) {
		this.currentUser = user;
	},

	logout() {
		this.currentUser = null;
	}
});
