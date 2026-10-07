<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'show']);
Route::get('/page', [PageController::class, 'show']);
