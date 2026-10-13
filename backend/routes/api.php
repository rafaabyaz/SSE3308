use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test-backend', function (Request $request) {
    return response()->json([
        'status' => 'success',
        'message' => 'Hello from Laravel Backend (VM / Cloud Run)!',
        'timestamp' => now()->toIso8601String(),
    ]);
});