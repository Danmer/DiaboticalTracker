//Generated Sat Aug 08 2020 18:09:47 GMT+0200 (Central European Summer Time)
var global_weapon_data = {"sword":{"weapon_tag":"melee","bind_group":"9","color":"888888","damage":"50","knockback":"250","ground_knockback":"250","rate":"700","speed":"0","can_destroy":"1","unlimited_ammo":"true","distance":"38","hit_radius":"25","allow_during_bolt":"true","melee_reward":"true","shot_particles":"railtest","shot_particles_attached":"rail_attached","impact_particles":"rail_impact","equip_particles_attached":"sword_equip","melee_animation":"true","model":"weapon_sword","model_position":"6.2 -7 8.7","model_scale":"0.10 0.10 0.10","model_camera_scale":"0.3","model_rotation":"175 -4 0","muzzle":"4.5 -6 20","fov":"59","shot_sound":"m_fire1 m_fire2 m_fire3 m_fire4 m_fire5","impact_sound":"m_impact1 m_impact2 m_impact3 m_impact4 m_impact5","hit_sound":"testhit1","equip_sound":"m_equip"},"blaster":{"respawn_time":"9","weapon_tag":"bl","color":"7c62d1","speed":"2200","rate":"100","damage":"20","default_ammo_pickup_ammo":"50","default_weapon_pickup_ammo":"75","max_ammo":"150","category":"1","bind_group":"1","splash_radius":"20","center_of_mass_offset":"0","center_of_mass_offset_self":"0","knockback":"17.5","knockback_self":"20","ground_knockback":"17.5","ground_knockback_self":"20","hit_radius":"1.5","combo_rate":["machinegun 100"," super_shotgun 100","shaft 100","rocket_launcher 100","pncr  100","grenade_launcher 100"],"decal":["decal_plasma 30 3 3.561 false false alpha 5","decal_glow_blue 25 1.75 3.561 false false alpha 40"],"loop_animation":"true","upgrade_animation":"true","muzzle_offset":"8 -9 0","model":"weaponbl","model_scale":"0.06","model_position":"2.5 -3.35 3.55","model_camera_scale":"0.6","can_destroy":"1","muzzle":"10 -8 16","fov":"30","model_scale_third_person":"1.1","model_position_third_person":"5 -11 12","detached_shot_particles":["false","false"],"shot_particles":"empty_system","shot_particles_attached":"plasma_muzzle_tier_1","missile_particles":"plasma_bullet_tier_1","impact_particles":"plasma_impact_tier_1","shot_sound":"bl_fire1 bl_fire2 bl_fire3 bl_fire4 bl_fire5","end_sound":"bl_fire_release1 bl_fire_release2 bl_fire_release3 bl_fire_release4 bl_fire_release5","missile_loop_sound":"bl_airbound","impact_sound":"bl_impact1 bl_impact2 bl_impact3 bl_impact4","equip_sound":"bl_equip","hit_sound":"hit_sound_hit1","out_of_ammo_sound":"bl_ooa","animation_suffix":"_stage2"},"super_shotgun":{"respawn_time":"9","weapon_tag":"ss","color":"9bc44d","default_ammo_pickup_ammo":"10","default_weapon_pickup_ammo":"15","max_ammo":"40","charge_animation":"1","shots_per_round":"20","spread":"4.6 4.6","spread_radius":"3","rate":"1000","damage":"5 5","max_damage_distance":"200","min_damage_distance":"800","min_hits":"2","bounce":"0","spread_ring":"0 6 6","knockback":"4.5","ground_knockback":"4.5","parallel_knockback":"true","impact_particles_distance_delay":"0.12","independent_upgrade_model":"true","hit_radius":"1.5 0","category":"2","bind_group":"2","group_damage":"true","max_damage_reward":"true","combo_rate":["machinegun 850","shaft 850","rocket_launcher 850","pncr 850","blaster 850","grenade_launcher 850"],"shot_particles":"empty_system","shot_particles_attached":"sg_tier_2_muzzle","missile_particles":"sg_projectile","impact_particles":"sg_impact_v2","decal":["decal 7 3 3.561 false false alpha 7","decal_glow_red 16 3 3.561 false false alpha 30","decal_glow 10 3 3.561 false false alpha 50"],"model":"weaponss","model_position":"2.5 -3 3.1","model_camera_scale":"0.5","can_destroy":"1","model_scale":"0.075","muzzle":"2.6 -2.7 4.7","fov":"40","model_scale_third_person":"1","model_position_third_person":"-3.2 0 6","shot_sound":"ss_fire1 ss_fire2 ss_fire3 ss_fire4","equip_sound":"ss_equip","out_of_ammo_sound":"ss_ooa","hit_sound":"hit_sound_hit1","detached_shot_particles":"false","multi_round_particles":"false","unlimited_ammo":"false"},"shaft":{"respawn_time":"9","weapon_tag":"shaft","color":"cdb200","rate":"50","damage":"6 6","min_damage_distance":"674","max_damage_distance":"675","category":"4","bind_group":"4","hit_radius":"2.2 0","knockback":"9.6","ground_knockback":"9","distance":"768","default_ammo_pickup_ammo":"50","default_weapon_pickup_ammo":"100","max_ammo":"150","min_ammo_gain":"10","speed":"0","orb":"true","orb_lag":"0.00","friendly_name":"Shaft","description":"Powerful medium-range sustained-damage weapon.","combo_rate":["machinegun 100"," super_shotgun 100","rocket_launcher 100","pncr 100","blaster 100","grenade_launcher 100"],"missile_particles":"vc_bullet","impact_particles":"shaft_impact","tracking_particles":"shaft_beam_particles","pfx":"shaft_filament muzzle","decal":["decal_shaft_back_connector 1.7 20 3.561 true false min","decal_shaft_connector 2 5 3.561 true false max","decal_shaft_back 1.7 20 3.561 true true min","decal_shaft 2 5 3.561 true true max"],"model":"weaponshaft","loop_animation":"true","model_scale":"0.060","model_position":"2.5 -3 3.6","model_camera_scale":"0.7","model_scale_third_person":"0.9","model_position_third_person":"-3.5 3.5 6","muzzle":"10.0 -11 41.0","fov":"45","parallel_knockback":"true","loop_sound":"shaft_loop1 shaft_loop2 shaft_loop3 shaft_loop4","start_sound":"shaft_ini1 shaft_ini2 shaft_ini3 shaft_ini4","end_sound":"shaft_release1 shaft_release2 shaft_release3 shaft_release4","equip_sound":"shaft_equip","hit_sound":"hit_sound_hit1","proximity_loop_sound":"shaft_idle_loop","out_of_ammo_sound":"shaft_ooa","impact_sound":"shaft_impact1 shaft_impact2 shaft_impact3 shaft_impact4 shaft_impact5 shaft_impact6 shaft_impact7 shaft_impact8","detached_shot_particles":"false"},"rocket_launcher":{"respawn_time":"9","weapon_tag":"rl","color":"df1f2d","speed":"1000","rate":"800","damage":"100","min_splash_damage":"10","splash_damage":"84","splash_hemisphere_offset":"20","splash_hemisphere_offset_damage_multiplier":"0.30","default_ammo_pickup_ammo":"5","default_weapon_pickup_ammo":"10","max_ammo":"25","category":"3","bind_group":"3","hit_radius":"1","friendly_name":"Rocket Launcher","description":"A rocket launcher.","charge_animation":"6","splash_radius":"125","knockback":"100","knockback_self":"110","ground_knockback":"70","ground_knockback_self":"110","center_of_mass_offset":"0","center_of_mass_offset_self":"0","combo_rate":["machinegun 750"," super_shotgun 750","shaft 750","pncr 750","blaster 750","grenade_launcher 750"],"shot_particles":"empty_system","shot_particles_attached":"rl_muzzle_v2","missile_particles":"rl_bullet","impact_particles":"rl_impact_v2","decal":["decal_explosion 340 3 3.561 false false alpha 5","decal_plasma 320 4 3.561 false false alpha 3","decal_glow_explosion 140 2 3.561 false false alpha 25"],"model":"weaponrl","model_scale":"0.07","model_position":"2.5 -3 3.28","model_camera_scale":"0.5","can_destroy":"1","muzzle":"3 -4.5 20","muzzle_offset":"2.5 -3 0","fov":"40","model_scale_third_person":"1","model_position_third_person":"0 4.5 4","shot_sound":"rl_fire1 rl_fire2 rl_fire3 rl_fire4 rl_fire5","missile_loop_sound":"rl_airbound","impact_sound":"rl_impact1 rl_impact2 rl_impact3 rl_impact4","equip_sound":"rl_equip","hit_sound":"hit_sound_hit1","hit_sound_min_pitch":"0.75","out_of_ammo_sound":"rl_ooa","detached_shot_particles":"false"},"crossbow":{"respawn_time":"9","weapon_tag":"cb","color":"1d89cc","speed":"5236.3636363636363636363636363636","rate":"1000","penetrating":"true","damage":"70 90","max_damage_distance":"1250","min_damage_distance":"500","gravity":"400","gravity_pitch_offset":"0","default_ammo_pickup_ammo":"10","default_weapon_pickup_ammo":"15","max_ammo":"25","category":"5","bind_group":"5","splash_radius":"1","center_of_mass_offset":"4","center_of_mass_offset_self":"20","knockback":"25","ground_knockback":"25","hit_radius":"3 2","friendly_name":"Void Cannon","description":"Pew pew pew","combo_rate":["machinegun 800"," super_shotgun 800","shaft 800","rocket_launcher 800","pncr  800","blaster 800","grenade_launcher 800"],"shot_particles":"empty_system","shot_particles_attached":"crossbow_muzzle","missile_particles":"crossbow_projectile","impact_particles":"crossbow_impact","missile_trail_particles":"crossbow_bolt_dynamic_trail","decal":["decal_plasma 30 3 3.561 false false alpha 5","decal_glow_blue 30 3 3.561 false false alpha 5","decal_glow_blue 15 3 3.561 false false alpha 5"],"muzzle_offset":"2.5 -3.22 0","model":"weaponcb","model_scale":"0.0625","model_position":"2.5 -3.22 2.5","model_camera_scale":"0.6","can_destroy":"1","muzzle":"10 -8 16","fov":"40","model_scale_third_person":"1","model_position_third_person":"3 2 12","shot_sound":"cb_fire1 cb_fire2 cb_fire3 cb_fire4 cb_fire5","missile_loop_sound":"cb_airbound","impact_sound":"cb_impact1 cb_impact2 cb_impact3 cb_impact4 cb_impact5","equip_sound":"cb_equip","hit_sound":"hit_sound_hit1","out_of_ammo_sound":"cb_ooa","detached_shot_particles":"false"},"pncr":{"respawn_time":"9","category":"5","bind_group":"5","weapon_tag":"pncr","color":"1fa8b6","damage":"70","bonus_consecutive_damage":"5","max_bonus_consecutive_damage_instances":"6","knockback":"62.5","ground_knockback":"57.5","default_ammo_pickup_ammo":"5","default_weapon_pickup_ammo":"10","max_ammo":"25","penetrating":"true","friendly_name":"PNCR","description":"Point N'Click Rifle","hit_radius":"1 0","charge_animation":"6","charge_animation_bonus":"true","rate":"1450","combo_rate":["machinegun 1450"," super_shotgun 1450","shaft 1450","rocket_launcher 1450","blaster 1450","grenade_launcher 1450"],"shot_particles":"pncr_projectile_particles","shot_particles_attached":"pncr_muzzle_particles","impact_particles":"pncr_impact_particles","pfx":["pncr_lightning_bolt_slot_01 slot_particle_center_01","pncr_lightning_bolt_slot_02 slot_particle_center_02","pncr_lightning_bolt_slot_03 slot_particle_center_03","pncr_lightning_bolt_slot_04 slot_particle_center_04","pncr_lightning_bolt_slot_05 slot_particle_center_05","pncr_lightning_bolt_slot_06 slot_particle_center_06","pncr_lightning_bolt_slot_07 slot_particle_center_07","pncr_muzzle_filament muzzle"],"decal":["decal 8","decal_glow_red 16 3 3.561 false false alpha 2.5","decal_glow_blue 24 3 3.561 false false alpha 5"],"model":"weaponpncr","model_scale":"0.055","model_position":"2.5 -3 2.35","model_scale_third_person":["0.9","0.85"],"model_pivot":"0 0.24 0","model_position_third_person":["0 0 0","-4 14.5 12"],"model_camera_scale":"0.55","can_destroy":"1","muzzle":"2.5 -3.5 6","fov":"50","impressive_reward":"true","parallel_knockback":"true","shot_sound":"pncr_fire1_default_t1","shot_sound_t2":"pncr_fire1_default_t2","shot_sound_t3":"pncr_fire1_default_t3","equip_sound":"pncr_equip","hit_sound":"hit_sound_hit1","proximity_loop_sound":"pncr_idle_loop","out_of_ammo_sound":"pncr_ooa","impact_sound":"pncr_impact_default1 pncr_impact_default2 pncr_impact_default3 pncr_impact_default4"},"machinegun":{"respawn_time":"9","weapon_tag":"mac","default_ammo":"100","default_ammo_pickup_ammo":"50","default_weapon_pickup_ammo":"100","max_ammo":"200","color":"cc791d","bind_group":"6","rate":"100","damage":"5","spread":"0","knockback":"4","ground_knockback":"4","charge_animation":"1","hit_radius":"2 0","combo_rate":[" super_shotgun 50","shaft 50","rocket_launcher 50","pncr  50","blaster 50","grenade_launcher 50"],"loop_animation":"true","shot_particles":"empty_system","shot_particles_attached":"machinegun_muzzle","impact_particles":"machinegun_impact","decal":["decal 10 3 3.561 false false alpha 1","decal_glow_red 16 3 3.561 false false alpha 30","decal_glow 10 3 3.561 false false alpha 20"],"model":"weaponmac","model_position":"2.25 -3 0.01","model_scale":"0.11","model_pivot":"0 -0.22 0","model_camera_scale":"0.5","fov":"40","muzzle":"2.7 -2.8 14","model_scale_third_person":"1.1","model_position_third_person":"6.5 2 2","shot_sound":"mac_fire1 mac_fire2 mac_fire3 mac_fire4 mac_fire5","end_sound":"mac_fire_release1 mac_fire_release2 mac_fire_release3 mac_fire_release4","equip_sound":"mac_equip","hit_sound":"hit_sound_hit1","out_of_ammo_sound":"mac_ooa","impact_sound":"mg_impact_default1 mg_impact_default2 mg_impact_default3 mg_impact_default4 mg_impact_default1 mg_impact_default5 mg_impact_default6 mg_impact_default7 mg_impact_default8 mg_impact_default9 mg_impact_default10","detached_shot_particles":"false","multi_round_particles":"false"},"grenade_launcher":{"respawn_time":"9","weapon_tag":"gl","color":"9d3329","speed":"1000","rate":"800","damage":"100","splash_damage":"90","bounce":"24","duration":"3000","splash_hemisphere_offset":"20","default_ammo_pickup_ammo":"5","default_weapon_pickup_ammo":"10","max_ammo":"25","target_indicator":"true","bind_group":"7","hit_radius":"1","gravity":"450","gravity_pitch_offset":"0.1","bounce_friction":"0.74","splash_radius":"120","knockback":"160","knockback_self":"160","ground_knockback":"160","ground_knockback_self":"160","center_of_mass_offset":"4","center_of_mass_offset_self":"0","combo_rate":["machinegun 875"," super_shotgun 875","shaft 875","pncr 875","blaster 875","grenade_launcher 875"],"shot_particles":"empty_system","shot_particles_attached":"gl_muzzle","missile_particles":"gl_bullet","impact_particles":"gl_impact_v2","missile_trail_particles":"gl_bullet_dynamic_trail","decal":["decal_explosion 100 3 3.561 false false alpha 10","decal_plasma 100 3 3.561 false false alpha 3","decal_plasma 175 3 3.561 false false alpha 3","decal_glow_red 60 3 3.561 false false alpha 25","decal_glow 35 3 3.561 false false alpha 20"],"model_camera_scale":["0.5","0.6"],"model":"weapongl","model_scale":"0.1","model_position":"2.5 -3 3.15","model_pivot":"0 -0.4 0","can_destroy":"1","muzzle":"3 -4.5 20","fov":"40","model_scale_third_person":"1.1","model_position_third_person":"7 -4 28","shot_sound":"gl_fire1 gl_fire2 gl_fire3 gl_fire4","impact_sound":"gl_impact1 gl_impact2 gl_impact3 gl_impact4","bounce_sound":"gl_bounce1 gl_bounce2 gl_bounce3 gl_bounce4 gl_bounce5","equip_sound":"gl_equip","single_missile_sound":"gl_airbound1 gl_airbound2 gl_airbound3 gl_airbound4","hit_sound":"hit_sound_hit1","hit_sound_min_pitch":"0.75","out_of_ammo_sound":"gl_ooa","detached_shot_particles":"false"}}; 
var global_gamemode_data = {"default":{"game_enable_items":"1","game_enable_drop":"0","game_initial_item_time":"0","game_truce_time":"0","game_team_mode":"0","game_draft_time":"0","game_rounds":"1","game_tide_bonus":"0","game_confirmation_frag":"0","game_time_limit":"0","game_score_limit":"0","game_maximum_respawn_time_ms":"5000","game_minimum_respawn_time_ms":"1500","game_hp":"125","game_stable_hp":"100","game_ghost_limit_hp":"100","game_max_hp":"200","game_armor":"0","game_stable_armor":"100","game_max_armor":"200","game_medium_armor":"150","game_self_damage":"1","game_wipe_out_mode":"0","game_friendly_fire":"1","game_weapon_respawn_time":"0","game_overtime":"120","game_overtime_score_limit":"0","game_overtime_score_threshold":"0","game_mercy_limit":"0","game_spawn_random_chance":"0","game_spawn_farthest_chance":"0","game_spawn_farthest_foe_chance":"1","game_spawn_farthest_threshold":"3","game_spawn_safety_radius":"0","game_full_charge":"0","game_warmup_time":"90","game_countdown":"5","game_round_countdown":"5","game_double_damage_invulnerability":"0","game_freeze_time":["0","0"],"game_freeze_save_time":["0","0"],"game_classes":"0","game_camera_offset":"0","game_camera_hor_offset":"0","game_player_view_height":"26","game_player_col_radius_hor":"15","game_player_col_radius_ver_bottom":"24","game_model":"0","game_player_hitbox_height":"61","game_player_hitbox_hover_offset":"-0.25","game_lifesteal":"0","game_life_count":"0","game_inventory_slots":"0","game_deposit_coins":"0","game_freeze_save_radius":"0","phy_kinetic_accel":"0","phy_wall_jumping":"0","phy_jump_speedup":"0","phy_sprint_max":"30","phy_sprint_rate":"0","phy_vertical_smoothing_factor":"0.965","phy_strafe_cycles":"1","phy_scale":"1","phy_ramp_impulse_up":"150","phy_target_tickrate":"125","phy_gravity":"800","phy_jump_impulse":"275","phy_lateral_speed_multiplier":"1.0","phy_back_speed_multiplier":"1.0","phy_max_ground_speed":"0","phy_max_hor_speed":"0","phy_crouch_speed":"210","phy_speed":"320","phy_accel_ground":"10","phy_deceleration_ground":"100","phy_surface_friction":"6","phy_air_speed":"320","phy_accel_air":"1","phy_air_speed_anisotropy":"1","phy_accel_air_anisotropy":"1","phy_auto_jump":"1","phy_strafe_jumping":"1","phy_double_jump":"0","phy_double_jump_impulse":"400","phy_decel":"0.3","phy_air_steering_torque":"0","phy_air_steering_torque_anisotropy":"0","phy_air_steering_dottenuation":"1","phy_air_steering_bonus":"0","phy_bolt_type":"1","phy_bolt_cooldown":"3","phy_bolt_cooldown_recovery":"0","phy_bolt_minimum_ground_time":"0.0697941","phy_bolt_base_speed":"482","phy_bolt_extra_speed":"0.1","phy_bolt_extra_accel":"0","phy_bolt_extra_accel_time":"0","phy_bolt_pitch":"22.5","phy_bolt_kinetic_energy":"51200","phy_bolt_ascent_impulse":"200","phy_bolt_activation_time":"0","phy_slide":"0","phy_slide_accel":"10","phy_slide_friction":"0.5","phy_slide_duration_eigenvalue":"2","phy_slide_duration_max":"2","phy_slide_duration_gamma":"1","phy_multi_jump":"0","phy_multi_jump_time":"0.4","phy_step_up":"0","phy_ramp_rel_impulse_up":"0","phy_ramp_up_speed":"0","phy_ramp_down_speed":"0","phy_strafe_mode":"1","phy_triple_jump":"0","net_server_hitscan":"0","net_max_backwards_reconciliation_ping":"0"},"edit":{"game_enable_items":"1","game_self_damage":"0","game_friendly_fire":"0","game_warmup_time":"0","game_draft_time":"0","game_countdown":"0","game_time_limit":"0","game_score_limit":"0","weapon":["sword 999","machinegun 999","blaster 999 true","super_shotgun 999","rocket_launcher 999","shaft 999","crossbow 999","pncr 999","grenade_launcher 999","healing_weeble 999","smoke_weeble 999","implosive_weeble 999","slowfield_weeble 999","explosive_weeble 999"]},"practice":{"game_warmup_time":"0","game_draft_time":"0","game_countdown":"0","game_time_limit":"0","game_weapon_respawn_time":"2","game_hp":"125","game_stable_hp":"100","phy_fly":"0","map":"practice","weapon":["sword 999","machinegun 999","blaster 999 true","super_shotgun 999","rocket_launcher 999","shaft 999","crossbow 999","pncr 999","grenade_launcher 999","healing_weeble 999","smoke_weeble 999","implosive_weeble 999","slowfield_weeble 999","explosive_weeble 999"]},"warmup":{"game_team_mode":"1","game_friendly_fire":"0","game_weapon_respawn_time":"2","game_hp":"125","game_stable_hp":"100","game_ghost_limit_hp":["125","125"],"game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"200","game_time_limit":"480","game_score_limit":"0","map":["b_crystal_cove","b_furnace","b_refinery","b_wellspring","b_test_map","b_alchemy","b_oxide","b_icefall","b_marina","b_sunken"],"weapon":["sword 999","machinegun 100","blaster 250 true","super_shotgun 50","rocket_launcher 50","shaft 250","pncr 50","grenade_launcher 5"]},"brawl":{"game_team_mode":"1","game_friendly_fire":"0","game_weapon_respawn_time":"2","game_hp":"125","game_stable_hp":"100","game_ghost_limit_hp":["125","125"],"game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"200","game_time_limit":"480","game_score_limit":"0","map":["b_crystal_cove","b_furnace","b_refinery","b_wellspring","b_test_map","b_alchemy","b_oxide","b_icefall","b_marina","b_sunken"],"weapon":["sword 999","machinegun 100","blaster 250 true","super_shotgun 50","rocket_launcher 50","shaft 250","pncr 50","grenade_launcher 5"]},"duel":{"game_initial_item_time":"0","game_truce_time":"0","game_tide_bonus":"30","game_confirmation_frag":"1","game_time_limit":"720","game_weapon_respawn_time":"5","game_mercy_limit":"15","map":["duel_bioplant","duel_f1sks_house","duel_frontier","duel_kasbah","duel_outpost_dunia","duel_perilous","duel_skybreak"],"weapon":["sword 999","machinegun 100"]},"ca":{"map":["a_barrows_gate","a_bazaar","a_heikam","a_junktion"],"game_truce_time":"7","game_enable_items":"0","game_team_mode":"1","game_rounds":"10","game_score_limit":"3","game_life_count":"2","game_hp":"200","game_stable_hp":"200","game_ghost_limit_hp":"200","game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"100","game_self_damage":"0","game_wipe_out_mode":"1","game_friendly_fire":"0","weapon":["sword 999","machinegun 100","blaster 250 true","super_shotgun 50","rocket_launcher 50","shaft 250","pncr 50","grenade_launcher 5"]},"rocket_arena":{"map":["a_barrows_gate","a_bazaar","a_heikam","a_junktion"],"game_truce_time":"7","game_enable_items":"0","game_team_mode":"1","game_rounds":"10","game_score_limit":"4","game_life_count":"2","game_hp":"200","game_stable_hp":"200","game_ghost_limit_hp":"200","game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"100","game_self_damage":"0","game_wipe_out_mode":"1","game_lifesteal":"0.5","game_friendly_fire":"0","weapon":["sword 999","rocket_launcher 999"]},"shaft_arena":{"map":["a_barrows_gate","a_bazaar","a_heikam","a_junktion"],"game_truce_time":"7","game_enable_items":"0","game_team_mode":"1","game_rounds":"10","game_score_limit":"3","game_life_count":"2","game_hp":"200","game_stable_hp":"200","game_ghost_limit_hp":"200","game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"100","game_self_damage":"0","game_wipe_out_mode":"1","game_lifesteal":"0.5","game_friendly_fire":"0","weapon":["sword 999","shaft 999"]},"wipeout":{"map":["wo_furnace","wo_refinery","wo_wellspring","wo_crystal_cove","wo_test_map"],"game_truce_time":"7","game_enable_items":"0","game_team_mode":"1","game_rounds":"10","game_score_limit":"3","game_hp":"200","game_stable_hp":"200","game_ghost_limit_hp":"200","game_max_hp":"200","game_armor":"100","game_stable_armor":"100","game_max_armor":"100","game_self_damage":"0","game_wipe_out_mode":"2","game_friendly_fire":"0","weapon":["sword 999","machinegun 100","blaster 150 true","super_shotgun 50","rocket_launcher 50","shaft 200","pncr 50","grenade_launcher 5","healing_weeble 1"]},"ffa":{"game_team_mode":"1","game_friendly_fire":"0","game_weapon_respawn_time":"2","game_hp":"125","game_stable_hp":"100","game_armor":"0","game_stable_armor":"100","game_ghost_limit_hp":"125","game_time_limit":"480","game_score_limit":"0","map":["b_crystal_cove","b_furnace","b_refinery","b_wellspring","b_test_map","b_alchemy","b_oxide","b_icefall","b_marina","b_sunken"],"weapon":["sword 999","machinegun 100"]},"ctf":{"game_team_mode":"1","game_friendly_fire":"0","game_weapon_respawn_time":"2","game_frag_limit":"5","game_time_limit":"960","game_self_damage":"1","game_mercy_limit":"8","map":["ctf_cathedral","ctf_dojo"],"weapon":["sword 999","machinegun 100"]},"macguffin":{"game_team_mode":"1","game_weapon_respawn_time":"2","game_friendly_fire":"0","game_score_limit":"2","game_spawn_farthest_threshold":"4","game_round_countdown":"15","game_maximum_respawn_time_ms":"2500","game_minimum_respawn_time_ms":"2500","map":["mg_sunken","mg_marina"],"weapon":["sword 999","machinegun 100"]},"instagib":{"game_full_charge":"1","game_enable_items":"1","game_self_damage":"0","map":["wo_furnace","wo_refinery","wo_wellspring","wo_crystal_cove","wo_test_map"],"weapon":["sword 999","crossbow 999"]},"instagib_brawl":{"game_full_charge":"1","game_enable_items":"1","game_self_damage":"0","map":["wo_furnace","wo_refinery","wo_wellspring","wo_crystal_cove","wo_test_map"],"weapon":["sword 999","pncr 999"]},"ghosthunt":{"game_team_mode":"1","game_friendly_fire":"0","game_hp":"100","game_stable_hp":"100","game_full_charge":"1","game_enable_items":"1","game_self_damage":"0","game_time_limit":"360","game_score_limit":"0","game_overtime":"60","map":["ig_coastline","ig_egg-plant","ig_stronghold","ig_terminal"],"weapon":["sword 999","crossbow 999"]},"coinrun":{"game_team_mode":"1","game_friendly_fire":"0","game_hp":"100","game_stable_hp":"100","game_full_charge":"1","game_enable_items":"1","game_self_damage":"0","game_time_limit":"360","game_score_limit":"0","game_overtime":"60","game_deposit_coins":"1","map":["gr_cliffside_canyons","gr_qunai_peaks","gr_titans_crossing"],"weapon":["sword 999","crossbow 999"]},"tdm":{"game_team_mode":"1","game_friendly_fire":"0","game_weapon_respawn_time":"15","game_hp":"125","game_time_limit":"720","game_overtime_score_limit":"10","game_overtime_score_threshold":"10","game_mercy_limit":"30","map":["tdm_icefall","tdm_oxide"],"weapon":["sword 999","machinegun 100"]},"extinction":{"game_friendly_fire":"0","game_team_mode":"1","game_hp":"125","game_score_limit":"4","game_life_count":"3","game_weapon_respawn_time":"5","map":["tdm_icefall","tdm_oxide"],"weapon":["sword 999","machinegun 100"]}};