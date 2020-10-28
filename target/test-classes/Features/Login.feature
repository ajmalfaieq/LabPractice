Feature: Login to Retail Website 

@login
Scenario: Login to MyAccount 
	Given User is on Retail website 
	When User click  on MyAccount 
	And  User click on Login 
	And User enter username 'sdet@tekschool.us' and password 'sdet' 
	And User click on Login button 
	Then User should be logged in to MyAccount dashboard