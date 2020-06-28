# Resident in Home Assistant

[Work in Progress]

This project will allow you to embed the [Resident](
    https://github.com/bradsk88/resident-game
) game in your Home Assistant dashboard.

Since the game was designed to be "always running", you can check in on the state of the game by going to your HA dashboard.  

In the future, we're hoping to build deeper integrations, providing state that 
can trigger HA automations, or using HA state to trigger events in the Resident 
game.

## Adding the card to your home assistant dashboard

1. Figure out where your home assistant configuration folder is. Usually, it's
   something like `~/.homeassistant`
2. Cd into the `www` folder of your config folder
3. Clone this repo `git clone https://github.com/bradsk88/resident-game-homeassistant`
4. Start home assistant if it's not already running
5. In the home assistant UI, make sure your user [is an administrator](
   https://developers.home-assistant.io/docs/frontend/custom-ui/registering-resources)  
6. Go to Configuration -> Resources and add a new resource
7. Set the Url to `/local/resident-game-home-assistant/card.js` and the
   resource type to `JavaScript Module`.
8. Go back to the HA dashboard where you want to add the card and enter edit
   mode.
9. Add a new card and choose "manual" for the type
10. Enter the following values:
   ```
   entity: none
   type: 'custom:custom-resident-game-card'
   ```
